---
title: Public Dupe Requirements
nav_order: 5
---

# PUBLIC DUPE BROWSER SUBMISSION REQUIREMENTS

{: .notice}
We expect all submissions for the public dupe browser to follow these.

Here are some requirements and instructions to fulfill them. Limits are not super strict but please try to meet them:
File size under 200KB
- If you upload many dupes then the whole pack should generally be under 500KB, for storage concerns.
- Using ACF's AIO controller instead of custom chips can help a lot here.
- Fewer props/constraints cans somewhat help too.

Entity count under 150 ([Relevant Tutorial]({{site.baseurl}}/docs/getting_started/first_tank/optimization.html#details))
- You can use [prop2mesh](https://steamcommunity.com/sharedfiles/filedetails/?id=2458909924) to turn props into efficient, visual only meshes.
  - Use these on detail props that do not serve as your main armor
  - Submaterial tool preserves texture
  - Remove these props afterwards. Their physical impact disappears while they remain visual.

Constraint count under 50 ([Relevant Tutorial]({{site.baseurl}}/docs/getting_started/first_tank/optimization.html#wheels))
- You can use [tank track tool](https://steamcommunity.com/sharedfiles/filedetails/?id=737640184) to have more visual wheels with less physical wheels.

Physical entity count under 11 ([Relevant Tutorial]({{site.baseurl}}/docs/getting_started/first_tank/optimization.html#wheels))
- We recommend you have 3 physical wheels per side, and avoid idler/drive wheels if possible.

Visually Optimize Armor ([Relevant Tutorial]({{site.baseurl}}/docs/getting_started/first_tank/optimization.html#armor))
- Use prop to mesh on your main armor and color them with alpha 0.
- Unlike with the details, you should not remove these props (they need to be physical)

Follow ACF guidelines and restrictions
- Restrictions are enabled by default. If you don't see any errors you are probably fine.
- [ACF guidelines (Valen rules)](https://github.com/Valen-Sandbox/.github/blob/main/server-rules.md)

Please do not use imported obj models.

The dupe should pass all the autotests (all green) unless there is a good reason. For example, Wheeled vehicles can't have invisible wheels because they need to be networked.

---

## Autotester

Hold `C + RIGHT CLICK` on an acf baseplate, then click the "Autotester" button.

{% include image.html src="public_dupe_requirements/cmenu.png" width="50%" %}

This opens up the menu below:

{% include image.html src="public_dupe_requirements/autotester.png" width="50%" %}

Click the "Run" or "Run Category" options to run the tests.

Some options have a "Fix" button available, which will attempt to fix the issue. Run at your own risk.

---

## Dupe pack submission tool

{: .notice}
> Nothing you submit leaves your browser. Save your progress elsewhere.
>
> Fill in the information as instructed. To submit either:
> - Make a PR with a similar structure to the other dupes
> - Submit in the `community-resources` channel with this zip.

<!-- Cropper CSS and local submitter CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cropperjs@1.5.13/dist/cropper.min.css">
<link rel="stylesheet" href="{{ '/assets/css/dupe_submitter.css' | relative_url }}">

<div id="dupe-submitter">
  <h2>Pack Information</h2>
  <label>Pack name: <input id="pack-name" type="text" maxlength="15"></label>
  <label>Author: <input id="author" type="text"></label>
  <label>Contact (Discord): <input id="contact" type="text"></label>

  <h2>Dupes</h2>
  <div id="dupe-list"></div>
  <button id="add-dupe">Add Dupe</button>

  <div style="margin-top:1em;">
    <button id="generate">Download ZIP (pack.txt + JPEGs)</button>
  </div>

  <p id="status" style="margin-top:.5em;color:green;"></p>
</div>

<!-- Scripts: Cropper, JSZip, then local submitter script -->
<script src="https://cdn.jsdelivr.net/npm/cropperjs@1.5.13/dist/cropper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js"></script>
<script src="{{ '/assets/js/dupe_submitter.js' | relative_url }}"></script>