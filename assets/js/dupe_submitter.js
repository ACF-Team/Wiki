/**
 * Public dupe browser submission form.
 * Builds a ZIP containing pack.txt (SQL inserts), cropped 256x256 JPEG
 * screenshots, and the raw dupe files.
 */

/**
 * DISCLAIMER: This tool was vibe coded. I reviewed and tested it myself of course.
 * This operates entirely in your browser and nothing is stored on a server.
 * In any case I review the output before adding it to the addon.
*/
document.addEventListener('DOMContentLoaded', () => {
  // ---- Config -------------------------------------------------------------
  const TYPES = ['MBT', 'LT', 'AA', 'APC', 'ATGM', 'IFV', 'Light Tank', 'SPG', 'Transport', 'Fighter'];
  const MOBILITIES = ['Tracked', 'Wheeled', 'Aircraft', 'Other'];
  const WEIGHT = { min: 0, max: 60.99 };
  const COST = { min: 0, max: 500 };
  const CROP_SIZE = 256;
  const JPEG_QUALITY = 0.85;
  const NOTES_MAX = 200;
  const PACK_NAME_MAX = 15;
  const MAX_DUPE_BYTES = 200 * 1024;

  // ---- Element refs -------------------------------------------------------
  const dupeList = document.getElementById('dupe-list');
  const addBtn = document.getElementById('add-dupe');
  const generateBtn = document.getElementById('generate');
  const statusEl = document.getElementById('status');
  const packNameInput = document.getElementById('pack-name');
  const authorInput = document.getElementById('author');
  const contactInput = document.getElementById('contact');

  const setStatus = (message, color = 'green') => {
    statusEl.textContent = message;
    statusEl.style.color = color;
  };

  // ---- Validation helpers -------------------------------------------------
  const numberInRange = (value, { min, max }) => {
    const n = Number.parseFloat(String(value).trim());
    return Number.isFinite(n) && n >= min && n <= max;
  };

  /**
   * Read a card's current field values into a plain object.
   * Single source of truth — used by both validation and ZIP generation,
   * so the two can never drift apart.
   */
  const readCard = (card) => ({
    name: card.querySelector('.dupe-name').value.trim(),
    type: card.querySelector('.dupe-type').value.trim(),
    mobility: card.querySelector('.dupe-mobility').value.trim(),
    weight: card.querySelector('.dupe-weight').value.trim(),
    cost: card.querySelector('.dupe-cost').value.trim(),
    notes: card.querySelector('.dupe-notes').value,
    imageBlob: card._imageBlob,
    dupeFile: card._dupeFile,
  });

  const cardIsComplete = (data) =>
    data.name &&
    data.type &&
    data.mobility &&
    numberInRange(data.weight, WEIGHT) &&
    numberInRange(data.cost, COST) &&
    data.imageBlob &&
    data.dupeFile &&
    data.dupeFile.size <= MAX_DUPE_BYTES;

  function updateGenerateButtonState() {
    const cards = Array.from(dupeList.children);
    const packName = packNameInput.value.trim();
    const author = authorInput.value.trim();
    const packNameValid = packName.length > 0 && packName.length <= PACK_NAME_MAX;

    const cardsComplete = cards.length > 0 && cards.every((c) => cardIsComplete(readCard(c)));
    const allComplete = packNameValid && author && cardsComplete;
    generateBtn.disabled = !allComplete;

    const cardRules = `Each dupe requires name, type, mobility, weight (tons ${WEIGHT.min}-${WEIGHT.max}), ` +
      `cost (pts ${COST.min}-${COST.max}), a cropped screenshot and a dupe file. ` +
      `Description is optional.`;

    if (!allComplete) {
      if (!packNameValid || !author) {
        setStatus(`Pack name must be 1-${PACK_NAME_MAX} characters and Author is required. Contact is optional.`, '#d9534f');
      } else if (cards.length === 0) {
        setStatus(`Add at least one dupe. ${cardRules}`, '#d9534f');
      } else {
        setStatus(cardRules, '#d9534f');
      }
    } else {
      // All requirements satisfied — clear any outstanding warning.
      setStatus('');
    }
  }

  // ---- String / SQL helpers -----------------------------------------------
  // Target is GMod's SQLite. SQLite string literals are escaped by doubling
  // single quotes; backslashes are NOT special, so no extra handling is needed.
  // (This matches what sql.SQLStr does in-game. Do NOT reuse this output against
  // MySQL — its escaping rules differ.) The generated SQL is reviewed by a human
  // before being run, which is the actual safety boundary here.
  const stripControl = (s) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '');
  const escapeQuotes = (s) => stripControl(s).replace(/'/g, "''");
  const sqlQuote = (s) => `'${escapeQuotes(s)}'`;                                 // escaped + wrapped

  const flatten = (s) => stripControl(s).replace(/\r?\n/g, ' ').trim();          // single-line fields
  const normalizeNewlines = (s) => stripControl(s).replace(/\r\n?/g, '\n');      // multi-line description

  const sqlText = (s) => sqlQuote(flatten(s));
  const sqlMultiline = (s) => `'${normalizeNewlines(s).replace(/'/g, '')}'`;     // newlines preserved
  const sqlNumber = (s) => {
    const n = Number.parseFloat(String(s).trim());
    return Number.isFinite(n) ? String(n) : '0';
  };

  // Filesystem-safe slug used for pack ids, paths, and filenames.
  const pathSafe = (s) =>
    flatten(s)
      .toLowerCase()
      .replace(/['"`]/g, '')
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_-]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '');

  // ---- Cropper loading ----------------------------------------------------
  // Cropper is loaded via <script> before this file. If it's somehow not
  // ready yet, wait for the window load event once rather than polling.
  const cropperReady = () =>
    typeof Cropper !== 'undefined'
      ? Promise.resolve()
      : new Promise((resolve, reject) => {
          window.addEventListener('load', () => {
            typeof Cropper !== 'undefined'
              ? resolve()
              : reject(new Error('Cropper.js failed to load'));
          }, { once: true });
        });

  // ---- Card creation ------------------------------------------------------
  const optionTags = (values) => values.map((v) => `<option>${v}</option>`).join('');

  function addDupeCard() {
    const idx = dupeList.children.length + 1;
    const card = document.createElement('div');
    card.className = 'dupe-card';
    card.innerHTML = `
      <fieldset class="dupe-fieldset">
        <legend>Dupe ${idx}</legend>
        <label>Dupe name: <input class="dupe-name" type="text"></label>
        <label>Type: <select class="dupe-type">${optionTags(TYPES)}</select></label>
        <label>Mobility: <select class="dupe-mobility">${optionTags(MOBILITIES)}</select></label>
        <label>Weight (tons): <input class="dupe-weight" type="number" step="0.01" inputmode="decimal" min="${WEIGHT.min}" max="${WEIGHT.max}"></label>
        <label>Cost (pts): <input class="dupe-cost" type="number" step="0.01" inputmode="decimal" min="${COST.min}" max="${COST.max}"></label>
        <div class="field-block">
          <label for="dupe-notes-${idx}">Description (multi-line, max ${NOTES_MAX} chars):</label>
          <textarea id="dupe-notes-${idx}" class="dupe-notes" maxlength="${NOTES_MAX}" rows="4"></textarea>
          <span class="field-hint">Supports multiple lines. Keep it to ${NOTES_MAX} characters or less.</span>
        </div>
        <div class="upload-row groups-row">
          <div class="upload-group screenshot-group">
            <div class="controls">
              <label class="upload-btn screenshot">Upload Screenshot<input type="file" accept="image/*" class="dupe-file"></label>
              <span class="file-pill dupe-image-name">No screenshot selected</span>
            </div>
            <div class="crop-row"><button class="crop-save">Crop &amp; Save ${CROP_SIZE}</button></div>
          </div>
          <div class="upload-group dupefile-group">
            <div class="controls">
              <label class="upload-btn dupefile">Upload Dupe File<input type="file" accept=".dupe,.txt,.dat,application/octet-stream" class="dupe-pack-file"></label>
              <span class="file-pill dupe-pack-name">No dupe file selected</span>
            </div>
          </div>
        </div>
        <div class="preview-wrap"></div>
        <div class="upload-row remove-row">
          <button class="remove-dupe">Remove Dupe</button>
        </div>
      </fieldset>
    `;
    dupeList.appendChild(card);

    const q = (sel) => card.querySelector(sel);
    const fileInput = q('.dupe-file');
    const packFileInput = q('.dupe-pack-file');
    const cropSave = q('.crop-save');
    const removeBtn = q('.remove-dupe');
    const previewWrap = q('.preview-wrap');
    const imageNamePill = q('.dupe-image-name');
    const packNamePill = q('.dupe-pack-name');

    let cropper = null;
    let imageUrl = null;

    card._imageBlob = null;
    card._dupeFile = null;
    cropSave.disabled = true;

    const destroyCropper = () => {
      if (cropper) {
        try { cropper.destroy(); } catch (_) { /* already gone */ }
        cropper = null;
      }
    };
    const revokeImageUrl = () => {
      if (imageUrl) { URL.revokeObjectURL(imageUrl); imageUrl = null; }
    };

    fileInput.addEventListener('change', async () => {
      const file = fileInput.files?.[0];
      if (!file) return;

      imageNamePill.textContent = file.name;
      card._imageBlob = null;
      cropSave.disabled = true;
      destroyCropper();
      revokeImageUrl();

      imageUrl = URL.createObjectURL(file);
      previewWrap.innerHTML = '';
      const img = document.createElement('img');
      img.style.maxWidth = '100%';
      previewWrap.appendChild(img);

      // Wait for both the image data and the Cropper library.
      const imgLoaded = new Promise((res) => img.addEventListener('load', res, { once: true }));
      img.src = imageUrl;

      try {
        await Promise.all([imgLoaded, cropperReady()]);
        cropper = new Cropper(img, { aspectRatio: 1, viewMode: 1, autoCropArea: 1 });
        cropSave.disabled = false;
        setStatus('');
      } catch (err) {
        console.error('Failed to initialize crop tool', err);
        setStatus('Failed to initialize crop tool — see console for details', '#d9534f');
      }
    });

    cropSave.addEventListener('click', (ev) => {
      ev.preventDefault();
      if (!cropper) { alert('Select an image first'); return; }
      try {
        const canvas = cropper.getCroppedCanvas({ width: CROP_SIZE, height: CROP_SIZE });
        canvas.toBlob((blob) => {
          card._imageBlob = blob;
          const url = URL.createObjectURL(blob);
          previewWrap.innerHTML = `<img src="${url}" width="128" height="128">`;
          destroyCropper();
          cropSave.disabled = true;
          updateGenerateButtonState();
        }, 'image/jpeg', JPEG_QUALITY);
      } catch (err) {
        console.error('Crop failed', err);
        alert('Crop failed — see console for details');
      }
    });

    packFileInput.addEventListener('change', () => {
      const file = packFileInput.files?.[0];
      if (!file) return;
      if (file.size > MAX_DUPE_BYTES) {
        card._dupeFile = null;
        packFileInput.value = '';
        packNamePill.textContent = 'No dupe file selected';
        updateGenerateButtonState();
        // Set after updateGenerateButtonState so the specific size error
        // isn't overwritten by the generic "incomplete card" message.
        setStatus(`"${file.name}" is ${(file.size / 1024).toFixed(0)}KB — dupe files must be under 200KB.`, '#d9534f');
        return;
      }
      card._dupeFile = file;
      packNamePill.textContent = file.name;
      updateGenerateButtonState();
    });

    removeBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      revokeImageUrl();
      destroyCropper();
      card.remove();
      renumberCards();
      updateGenerateButtonState();
    });

    // Re-validate whenever any text/select field changes.
    ['.dupe-name', '.dupe-type', '.dupe-mobility', '.dupe-weight', '.dupe-cost']
      .forEach((sel) => q(sel).addEventListener('input', updateGenerateButtonState));

    updateGenerateButtonState();
  }

  const renumberCards = () => {
    Array.from(dupeList.children).forEach((card, i) => {
      const legend = card.querySelector('legend');
      if (legend) legend.textContent = `Dupe ${i + 1}`;
    });
  };

  // ---- ZIP generation -----------------------------------------------------
  async function generateZip() {
    setStatus('Generating...');

    const packName = packNameInput.value.trim() || 'pack';
    const packId = pathSafe(packName) || 'pack';
    const zip = new JSZip();

    const dupeRows = Array.from(dupeList.children).map((card, i) => {
      const d = readCard(card);
      const imgName = `${packId}_dupe${i + 1}.jpg`;
      const dupeFileName = d.dupeFile ? d.dupeFile.name : `${packId}_dupe${i + 1}.dupe`;

      if (d.imageBlob) zip.file(`images/${imgName}`, d.imageBlob);
      if (d.dupeFile) zip.file(`dupes/${dupeFileName}`, d.dupeFile);

      return `(${sqlText(pathSafe(d.name))}, ${sqlText(d.name)}, ${sqlNumber(d.cost)}, ` +
        `${sqlNumber(d.weight)}, ${sqlText(d.type)}, ${sqlText(d.mobility)}, ` +
        `${sqlText(packId)}, ${sqlMultiline(d.notes)})`;
    });

    const lines = [
      '-- Insert pack',
      'INSERT INTO PackData (packid, packname, author, contact)',
      `VALUES (${sqlText(packId)}, ${sqlText(packName)}, ${sqlText(authorInput.value)}, ${sqlText(contactInput.value)});`,
      '',
      '-- Insert dupes using the string packid',
      'INSERT INTO DupeData (path, name, cost, weight, type, mobility, packid, description) VALUES',
      dupeRows.join(',\n\n') + ';',
    ];

    zip.file('pack.txt', lines.join('\n'));

    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${packId}_submission.zip`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    setStatus('Done — download started.');
  }

  // ---- Wire up ------------------------------------------------------------
  addBtn.addEventListener('click', (e) => { e.preventDefault(); addDupeCard(); });
  generateBtn.addEventListener('click', (e) => { e.preventDefault(); generateZip(); });
  [packNameInput, authorInput].forEach((el) => el.addEventListener('input', updateGenerateButtonState));

  addDupeCard();
  generateBtn.disabled = true;
});