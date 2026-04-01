---
title: Frequently Asked Questions
nav_order: 9
---

# Incompatible Addons
Some addons are known to be incompatible with ACF, particularly older/other versions of the addon that you might have also installed. If you have any of the following addons installed alongside ACF (referred to here as ACF-3), you should make sure that you disable or uninstall them:
- [Armored Combat Extended](https://steamcommunity.com/sharedfiles/filedetails/?id=3333669763) (ACE)
- Older versions of ACF outside the official Steam Workshop addon and this GitHub repository (usually this is what is referred to as ACF-2)
- Older versions of ACF Missiles (only the version that was uploaded by us will work)
- [ACF Weight Tool](https://steamcommunity.com/sharedfiles/filedetails/?id=108941774) (a better version of this is already included in the addon)

# "Couldn't create entity: (thing) is not a registered ACF entity class."
You most likely have something installed wrong. Make sure that you have all of ACF's [dependencies](https://github.com/ACF-Team/ACF-3?tab=readme-ov-file#dependencies) installed properly and enabled and that you aren't also using any of the incompatible addons.

# "No such method: e:(thing)"
You have some necessary Wiremod E2 extensions disabled. You can turn them on in the tab located at Utilities > Admin > E2 Extensions in the spawnmenu. Typically the most important one you'll want to enable is `propcore`, but you can also potentially require any of the others in that list.

# What is parenting? How do I do that?
Parenting is a method to connect two entities together without the use of constraints or physical collisions between them, which is generally preferred over the latter for reasons such as preventing lag, avoiding unnecessary collisions, ease of use, and so on. Parenting tools are not included in ACF, but the one that we recommend can be installed [here](https://steamcommunity.com/sharedfiles/filedetails/?id=111929524).

# Do I need to parent everything to a gate attached to my baseplate?
No. This was previously required years ago due to an ancient bug, but that issue has long since been resolved and you can safely parent everything directly to the baseplate. You may still find somebody telling you to do this if you are watching a very old video tutorial, though.

# "ACF Engine has been disabled: The engine must be parented to an ACF baseplate."
Just do what the notification says and make sure that your engine is parented to an ACF baseplate. If this is happening on an existing dupe, you can replace the previous baseplate with an ACF one by right clicking on it while in the Baseplates tab in the ACF Menu tool. Alternatively, if you really can't stand doing this, you can turn this restriction off at Serverside Settings > Legal Checks > "Allow arbitrary parenting of entities." in the Settings tab of the ACF Menu.

# "ACF (Weapon) has been disabled: (Weapon) can only be parented to turret entities and must have a baseplate root ancestor."
Do the same thing as in the question above this one. Here, however, you are also capable of parenting your weapons to ACF turret entities as well as the baseplate.

# Old dupes are super slow/use way too much fuel/can't shoot straight! Help!
Your dupes may need to be modified to include ACF crew entities, which were added in an update in June 2025. We strongly recommend that you take the time to add them to your older builds; however, if this is a deal breaker for you, you can effectively remove the requirement for them by going to Serverside Settings > General Settings > Minimum Crew Efficiency in the ACF Menu and setting that value to 1.

# I can't save my dupes properly with the Duplicator tool!
Using the Duplicator tool with ACF is very hit or miss due to the fact that this tool lacks support for many things used by a typical ACF build. We generally recommend that you use [Advanced Duplicator 2](https://steamcommunity.com/sharedfiles/filedetails/?id=773402917) instead, as it properly supports everything that ACF has to offer.

# The AIO controller doesn't work in singleplayer
Due to how single player servers work, prediction (used by client side key detection) breaks. Certain AIO features like switching ammo types will not work in pure singleplayer. It should work fine for local multiplayer (peer to peer) or srcds (servers you can find in the server browser)