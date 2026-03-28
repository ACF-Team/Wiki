---
title: Baseplates and AIO
parent: Your First Tank
nav_order: 1
---

# Baseplate Entities
All ACF entities are meant to be spawned through the ACF menu.

To get here, click `Entitites` -> `Baseplate`.

Try setting the settings like so:

Close the menu and left click, spawning the baseplate:

The baseplate is the core of any ACF-3 Contraption. Some uses of it are:
- Preventing other vehicles from driving through yours (collisions)
- Baseplate seats, which the user can sit in to avoid damage (represented by crew)

Look at the baseplate and press `ALT + E`. If you set the settings right, you should be able to sit in a seat the baseplate provides.

# All In One (AIO) Controllers
AIO Controllers act like the brains of a vehicle. They are not required, but make it significantly easier for a new user to make a working vehicle.

In the ACF menu, navigate to `Entities` -> `Controller` and place the AIO controller on the baseplate.

Let's link the aio controller to the baseplate:
1. Right click the AIO controller (it should be colored green)
2. Right click the baseplate (it should be uncolored now)
3. Notice if you move your crosshair over the AIO controller, it will show what it is linked to:
    - The baseplate entity
    - The baseplate seat entity (the cube at the center of the baseplate)

Now if you look at the baseplate and press `ALT + E` again, the AIO will:
- Setup a camera view above your baseplate
- Initialize a HUD (with no information yet)