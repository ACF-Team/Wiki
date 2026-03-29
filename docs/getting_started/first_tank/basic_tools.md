---
title: Basic Tools
parent: Your First Tank
nav_order: 2
---

# Precision Alignment
Precision Alignment helps you move and align props in a precise way. 

Try aligning your controller with your baseplate.

{% include clip.html src="basic_tools/align.mp4" %}

This is just a basic demonstration of PA; it is capable of much more. This [tutorial](https://www.youtube.com/watch?v=jghzk0ESLOU) goes into more depth.

# Multi-Parent
Multi-Parent helps you reduce the physics and networking cost of many entities by making them "follow" others.

Select the Mutli-Parent tool from the menu and make sure you have these settings.

Left click the controller. It should be colored green (selected).

Right click the baseplate. The controller should return to normal.

Now if you move the baseplate around, you should see the AIO controller "stick"/"follow" the baseplate:

{% include clip.html src="basic_tools/parent.mp4" %}

Here, the baseplate is the "parent" and the aio controller is the "child".

"Parenting" props is much more optimized than using welds, you generally should not have to use welds at all.

However, unlike welds, the child no longer collides with anything and the parent does not follow the child.

# Advanced Duplicator 2
Advanced Duplicator 2 helps you load and save your builds, similar to the default duplicator. Think of it like a blueprint for a vehicle you made.

Select the Advanced Duplicator 2 tool.

Dupes are stored as `txt` files in your dupe folder (`C:\Program Files (x86)\Steam\steamapps\common\GarrysMod\garrysmod\data\advdupe2`).

The file browser at the top of the menu interacts with your dupe folder.

Try creating a basic folder, area copy your dupe, save it and load it:

{% include clip.html src="basic_tools/advdupe2.mp4" %}

The purpose of the `MyFirstTank` folder is to keep things organized. We recommend you have a folder for each vehicle, in case you make multiple versions.

Your tank is now saved and even if you close the game or crash, your progress is saved.

You should never work on an unfrozen dupe. If you need to unfreeze for testing, you can dupe and paste a copy to test while keeping the original untouched.