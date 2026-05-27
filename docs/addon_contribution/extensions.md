---
title: Extensions
parent: Addon Contribution
nav_order: 6
---

Once you understand the file structure of the main addon, making an extension is simple.

The `gloader` that already exists in the main repository will load your addon automatically.

Just specify the files as if you were working in the main repository, e.g.:
- Entity logic still goes under `lua/acf/entities`
- Materials still go under `materials/`
- Models still go under `models/`

Here are some examples of ACF-3 extensions:
- `https://github.com/FLINT-IX/ACP`