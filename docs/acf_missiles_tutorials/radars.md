---
title: Radars
parent: ACF Missiles Tutorials
nav_order: 4
---

## Scanning Types

### Directional Radars

* These radars have an **infinite** range, but a **limited view cone**.

{% include image.html src="radars/large_directional_radar.png" width="25%" %}

{% include image.html src="radars/small_directional_radar.png" width="25%" %}

### Spherical Radars

* These radars have a **limited** range, but have **360 degrees of view**.

{% include image.html src="radars/medium_spherical_radar.png" width="25%" %}

## Detection Types

### Vehicle Radars

These type of radars are capable of detecting entire vehicles and giving data about the common position and velocity of the vehicle.
* IDs      : The ID of the contraption
* Owner    : The owner of the vehicle
* Position : The position of the vehicle
* Velocity : The velocity of the vehicle
* Distance : The distance between the radar and the vehicle

### Anti-Missile Radars

These type of radars are specially designed to provide you with instant and accurate data about any missiles within view of the radar. They provide 4 different pieces of information.
* IDs      : The ID of the missile
* Owner    : The owner of the missile
* Position : The position of the missile
* Velocity : The velocity of the missile
* Distance : The distance between the radar and the missile

Using this data, it is possible to make your own anti-missile system, or even a simple automatic countermeasure system.