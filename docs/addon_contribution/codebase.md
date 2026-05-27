---
title: Code Base Explanation
parent: Addon Contribution
nav_order: 4
---

Please see this [gmod wiki page](https://wiki.facepunch.com/gmod/Lua_Folder_Structure) on file structure first.

# File Structure Overview
If this looks imposing, don't worry. You probably don't need to deal with most of these. Skip to the next section maybe.

- `materials/`, `models/`, `particles/`, `sound/`, `resource/
- `lua/`
  - `acf/`
    - `ballistics/` - Ballistics helper functions 
    - `combat/` - Many restrictions and checks that are automatically enforced by the addon
    - `compatibility/` - Backwards compatibility code
    - `contraption/` - Code related to tracking information of contraptions 
    - `core/`
      - `classes/` - Class constructors
      - `laser/` - Laser computer code
      - `networking/` - Networking and modelling libraries
      - `overlay/` - Overlay library
      - `utilities/` - Various helper functions 
    - `damage/` - Damage related helper functions and objects
    - `entities/` - Class instantiations
    - `hooks/` - ??? :P
    - `menu/`
      - `items_cl/` - Contains many of the sub menus accessible from the main menu, e.g. for certain entities like crew. 
      - `operations/` - Helper functions for the main menu and copy tool.
    - `missiles/` - Various helper functions for missiles
    - `mobility/objects_sv/link.lua` - Link objects used in gearboxes 
    - `persisted_vars/vars_cl.lua` - Client side ACF settings that persist across sessions
    - `scanner/scanner_sh.lua` - ACF scanner code
  - `acf_devtools/` - Compatibility support for dev tools extensions
  - `autorun/`, `includes/` - Loads the entire addon. You probably don't need to touch this.
  - `cfw/extensions/` - Code related to tracking information of contraptions 
  - `effects/` - Definitions each lua effect
  - `entities/` - Main entity logic
  - `ponder/` - Ponder tutorials
  - `starfall/` - Starfall library support
  - `tests/` - Definitions for GLuaTests
  - `vgui/acf_panel.lua` - Defines different ACF panel types
  - `weapons/` - Definitions for tools. Combat weapons found in another repository.

# Use cases
## Class system
- The class constructors (how to create a type of class) are located in `lua/acf/core/classes/*/registration.lua`
- The class instances (examples of a type of class) are defined in `lua/acf/entities`

## Creating a menu
- Create a new menu in `lua/acf/menu/items_cl`, similar to the other example menus there.
  - The various types of ACF panels you can call are located in `lua/vgui/acf_panel.lua`.

## ACF Constants and Settings
- Constants and settings are defined in `lua/acf/core/globalslua`.

## Chip libraries
- Expresion2 functions located in `lua/entities/gmod_wire_expression2/`
- Starfall functions located in `lua/starfall/libs_sh/acffunctions.lua`

## Tools
- Tools are defined in `lua/weapons`.
