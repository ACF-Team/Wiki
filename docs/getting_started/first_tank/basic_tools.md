---
title: Basic Tools
parent: Your First Tank
nav_order: 2
---

# Precision Alignment
Precision Alignment helps you move and align props in a precise way. 

Using `SHIFT + E` and moving your mouse, try aligning your controller with your baseplate.

Select the Precision Alignment tool from the menu (from the constraints category).

Left click near the center of the baseplate. A cross should appear and be snapped to the center.

Move underneath the AIO Controller and `SHIFT + LEFT CLICK` it. Similarly, a second cross should appear and be snapped to the center.

Right click the controller, open the menu and click "move entity":

The AIO controller should be moved on top of the baseplate very precisely:

This is just a basic demonstration of PA; it is capable of much more. This [tutorial](https://www.youtube.com/watch?v=jghzk0ESLOU) goes into more depth.

# Multi-Parent
Multi-Parent helps you reduce the physics and networking cost of many entities by making them "follow" others.

Select the Mutli-Parent tool from the menu and make sure you have these settings.

Left click the controller. It should be colored green (selected).

Right click the baseplate. The controller should return to normal.

Now if you move the baseplate around, you should see the AIO controller "stick"/"follow" the baseplate.

Here, the baseplate is the parent and the aio controller is the child.

"Parenting" props is much more optimized than using welds, you generally should not have to use welds at all.

However, unlike welds, the child no longer collides with anything and the parent does not follow the child.

![alt text](dupe_browser.webp)

# Advanced Duplicator 2
Advanced Duplicator 2 helps you load and save your builds, similar to the default duplicator. Think of it like a blueprint for a vehicle you made.

Select the Advanced Duplicator 2 tool.

Dupes are stored as `txt` files in your dupe folder (`C:\Program Files (x86)\Steam\steamapps\common\GarrysMod\garrysmod\data\advdupe2`).

The file browser at the top of the menu interacts with your dupe folder.

Right click the `Advanced Duplicator 2` folder in the browser and select `New Folder`. Type `MyFirstTank` and press `Enter`.

Close the menu and look at the baseplate. Hold `SHIFT + RIGHT CLICK` and a green box should appear. Then right click again. This should copy the AIO controller and the baseplate entities.

Next, right click the `MyFirstTank` folder and select "Save". Type `v1` and press `Enter`.

The purpose of the `MyFirstTank` folder is to keep things organized. We recommend you have a folder for each vehicle, in case you make multiple versions.

Your tank is now saved and even if you close the game or crash, your progress is saved.

Close the menu, look elsewhere and press `LEFT CLICK`. It should paste out the dupe.

You should never work on an unfrozen dupe. If you need to unfreeze for testing, you can dupe and paste a copy to test while keeping the original untouched.

![alt text](dupe_browser.webp)