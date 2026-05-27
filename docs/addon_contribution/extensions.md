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

Your addon should have a globals file at `lua/acf/core/<addon name>_globals.lua` with the following snippet:
```lua
do -- Update checker
    hook.Add("ACF_OnLoadAddon", "ACF Comedic Update Checker", function()
        -- USE YOUR ORG NAME AND ADDON NAME INSTEAD.
        ACF.AddRepository("ACF-Team", "ACF-3-Comedic")
        hook.Remove("ACF_OnLoadAddon", "ACF Comedic Update Checker")
    end)
end
```

Here are some examples of ACF-3 extensions:
- https://github.com/ACF-Team/ACF-3-Comedic
