---
title: Ammo Crates
parent: ACF Tutorials
nav_order: 1
---

Ammo storage has overall changed greatly between ACF-2 to ACF-3!

## Model Change
The old ammobox models are no longer used, but still included with an install of ACF for decoration purposes.
They've been replaced by a single scaling wire model, and the boxes can go from 6 units up to 96 units in all axises.

## Ammo Storage Change
The ammo storage itself has also been greatly overhauled, long gone are the days of liquid rounds!
Now, the round storage is calculated from the round's actual size compared to the box's capacity.
It checks this several times before the box is made, comparing each direction for the best round count, and then picking the best one.

## Visual Ammo Indicator
This fancy little addition is useful for giving you a neat way to see how the ammo was shown to be stored, so you can better size the box to suit your needs.
Its affected by 2 console commands, both of which are archived so they will stay set. *__This only shows if you look at an ammobox with the ACF Menu Tool!__*

### acf_drawboxes (0 - 1)
This command turns not just this on, but also shows hitboxes for any ACF entity that has them set up. The way they get displayed will vary from entity to entity.

### acf_maxroundsdisplay (0 - 1000)
This command adjusts how many individual rounds can be displayed at once before bulk display is used.

**DISCLAIMER: THESE DO NOT AFFECT THE BOX'S HITBOXES, IT WILL NOT CHANGE WHAT HAPPENS WHEN THE BOX IS HIT**

---

## The Visuals Themselves

By default, all rounds are stored individually, with no modification.
* This is denoted by a **BLUE** outline.

{% include image.html src="ammocrates/normal.png" width="10%" %}

If the round in question goes into a Machine Gun, Heavy Machine Gun, Grenade Launcher, Smoke Launcher or Semiautomatic Cannon, then the round becomes packaged.
* This is denoted by a **GREEN** outline, and it represents and ENTIRE MAGAZINE worth of ammo as opposed to individual rounds.

_**Would have the green one here, but that particular feature is not available yet**_

Sometimes, the round may be unable to fit in a box, to which the round is cut in half and stored side by side.
You will obviously have less rounds in a box than if it could fit fully, but this is so you can at least get some storage in tight spaces.
* This is denoted by an **ORANGE** outline.

{% include image.html src="ammocrates/twopiece.png" width="10%" %}

Mentioned above, the Bulk Round visual is where instead of rendering all of the rounds in a box, it saves your framerate depending on what you set for **acf_maxroundsdisplay** by drawing a single box instead of individual rounds.
* This is denoted by a **RED** outline.

{% include image.html src="ammocrates/bulk.png" width="10%" %}
