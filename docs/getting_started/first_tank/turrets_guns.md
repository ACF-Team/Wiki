---
title: Turrets and Guns (WIP)
parent: Your First Tank
nav_order: 5
---

# Turrets
Turret entities are the primary method for aiming things on your vehicle.

Spawn a 72 unit horizontal turret from the menu and place it on your vehicle.

{% include clip.html src="turrets_guns/horizontal.mp4" %}

Spawn a 24 unit vertical turret from the menu and place it near the front of your horizontal ring.

{% include clip.html src="turrets_guns/vertical.mp4" %}

# Guns
Guns can be used to damage other vehicles.

Spawn a 100mm gcannon and place it in your vertical turret ring.

{% include clip.html src="turrets_guns/gun.mp4" %}

# Setup
Next, parent the:
1. Gun to the vertical ring
2. Vertical ring to the horizontal ring
3. Horizontal ring to the baseplate

{% include clip.html src="turrets_guns/parent.mp4" %}

Next, link the AIO controller to all three.

{% include clip.html src="turrets_guns/link.mp4" %}

Now the AIO controller can aim the gun.

{% include clip.html src="turrets_guns/aim.mp4" %}