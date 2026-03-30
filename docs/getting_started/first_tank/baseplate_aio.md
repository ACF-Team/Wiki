---
title: Baseplates and AIO
parent: Your First Tank
nav_order: 1
---

# Baseplate Entities
All ACF entities are meant to be spawned through the ACF menu.

Select the acf menu tool, then the baseplates menu, configure the settings and spawn it like so:

The baseplate is the core of any ACF-3 Contraption. Some uses of it are:
- Preventing other vehicles from driving through yours (collisions)
- Baseplate seats, which the user can sit in to avoid damage (represented by crew)

{% include clip.html src="baseplate_aio/spawn.mp4" %}

Look at the baseplate and press `ALT + E`

You should be able to sit in the baseplate seat, but we used the wrong settings.

Uncheck the "Disable Alt E" option and update the entity. Now it should work.

{% include clip.html src="baseplate_aio/alt_e.mp4" %}

{: .highlight}
> The orange line with "North" at the end should be aligned with your baseplate's forwards direction (red line).
> 
> It is good practice to always build north. AIO controllers (below) require it.

# All In One (AIO) Controllers
AIO Controllers act like the brains of a vehicle. They are not required, but make it significantly easier for a new user to make a working vehicle.

Let's create an aio controller and link it to the baseplate:
1. In the ACF menu, navigate to `Entities` -> `Controller` and place the AIO controller on the baseplate.
2. Right click the AIO controller (it should be colored green)
3. Right click the baseplate (it should be uncolored now)
4. Notice if you move your crosshair over the AIO controller, it will show what it is linked to:
    - The baseplate entity
    - The baseplate seat entity (the cube at the center of the baseplate)

{% include clip.html src="baseplate_aio/link.mp4" %}

Now if you look at the baseplate and press `ALT + E` again, the AIO will:
- Setup a camera view above your baseplate
- Initialize a HUD (with no information yet)

{% include clip.html src="baseplate_aio/hud.mp4" %}