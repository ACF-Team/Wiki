---
title: Optimization
parent: Your First Tank
nav_order: 9
---

{: .notice}
We strongly recommend you follow these best practices for making your tank optimized. If everyone's tanks are optimized, you can have more of them in combat at any one time.

Many optimizations involve visual optimizations that allow us to use fewer physical entities.

# Wheels
Using the tank track tool, you can use a few physical wheels to represent many visual wheels and a track.

# Details
Using the prop 2 mesh tool, you can use a single physical controller entity to represent many visual props.

# Armor
Similar to details, you can optimize your armor.

# AIO And Chips
If you use chips like E2/SF, consider offloading some of the work to an AIO controller.

It intentionally has options for disabling aspects you may want covered by another chip.

For example, using AIO for the mobility control while having your own custom HUD or turret system.