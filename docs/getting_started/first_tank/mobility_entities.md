---
title: Mobility Entities
parent: Your First Tank
nav_order: 3
---

# Engines

Engines power your vehicle. Larger engines are generally more powerful but take up more space.

The top dropdown is the engine type and the bottom dropdown is the engine model.

Select "V12 Engine", "21.0L V12 Diesel", spawn and place them like so:

# Fuel
Engines require fuel to function.

Scroll down in the engine menu, select a 72x24x24 fuel tank, spawn and place them like so:


# Gearboxes
Gearboxes transfer power from the engine to the wheels.

Select a transaxial CVT with these settings, spawn and place it down like so:

# Wheels

{: .notice}
If it helps, [Review Precision Alignment](basic_tools.html/#precision-alignment).

Tanks have treads, but in gmod we have to cope with wheels.

Navigate to `models/sprops/trans/miscwheels/tank30.mdl` and spawn 3 wheels.

Using PA, move a wheel to the middle of your baseplate. Then move the other 2 wheels to the corners.

Now select "Plane - HitPos + HitNormal" from the PA tool menu.

`LEFT CLICK` to place a plane on the center of the baseplate.

Next, select "HitNormal" and `LEFT CLICK` the map wall such that the plane "cuts" along the length of the baseplate.

`RIGHT CLICK` the front wheel to select it.

Press `R` to open the advanced menu, select "Rotation Functions" and select "Mirror Across Plane".

Next, select "Plane 1" and `SHIFT + LEFT CLICK` the "Rotate Entity" button.

This "Mirrors" the wheel to the other side of the tank. Do the same for the other two wheels.
