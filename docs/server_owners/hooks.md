---
title: Hooks
parent: For Server Owners
nav_order: 1
---

{: .warning}
Some of these may be out of date. Please let us know.

You can interface with the ACF addon using [hooks](https://wiki.facepunch.com/gmod/hook.Add).

For example, you can prevent fuel tanks from refuelling:
```lua
hook.Add("ACF_CanRefuel", "DisableRefuelling", function()
    return false
end)
```

---

## Shared Hooks

### ACF_OnNewSimpleClass

### ACF_OnNewClassGroup

### ACF_OnNewGroupedClass

### ACF_OnClassLoaded

### ACF_CanCreateEntity

### ACF_CanUpdateEntity

### ACF_UpdateRoundData

### ACF_GetDisplayData

### OnEntityResized

---

## Serverside Hooks

### ACF_OnPlayerLoaded

### ACF_VerifyData

### ACF_OnSetupInputs

### ACF_OnSetupOutputs

### ACF_OnEntitySpawn

### ACF_OnEntityUpdate

### ACF_OnEntityLast

### ACF_OnAmmoFirst

### ACF_OnAmmoLast

### ACF_FuelExplode

### ACF_CanRefuel

### ACF_AmmoExplode

### ACF_CanRefill

### ACF_FireShell

### ACF_KEShove

### ACF_BulletDamage

### ACF Bullet Flight

### ACF_SOUND_MISSILE

### ACF_OnUpdateServerData

### ACF_OnUploadServerData

### OnMissileLaunched

---

## Clientside Hooks

### ACF_AllowMenuOption

### ACF_AllowMenuItem

### ACF_OnServerSettingsLoaded

### ACF_OnClientSettingsLoaded

### ACF_SetupAmmoMenuSettings

### ACF_AddAmmoPreview

### ACF_AddAmmoControls

### ACF_AddCrateDataTrackers

### ACF_AddAmmoInformation

### ACF_UpdatedRepository

### ACF_DrawBoxes

### ACF_BulletEffect

### ACF_OnUpdateClientData

### ACF_OnUploadClientData