---
title: Warning Receivers
parent: ACF Missiles Tutorials
nav_order: 5
---

## Warning Receivers

* Warning receivers are compatible with AIO. Right click on the receiver and then right click on the AIO chip to link them. When your receiver detects a radar or laser it will draw a line in the direction of it.

### Radar Warning Receiver

{% include image.html src="radarwarningreceiver.jpg" width="25%" %}

* This warning receiver solely detects radars when inside their view cone.

These type of radars are capable of detecting entire vehicles and giving data about the common position and velocity of the vehicle.
* Detected : Returns 1 if the receiver is detecting a radar signal.
* Direction: Returns VECTOR of the detected radar.
* Angle    : Returns VECTOR of the detected radar.
* Entity   : The radar reciever itself (ENTITY).

### Laser Warning Receiver

{% include image.html src="laserwarningreceiver.jpg" width="25%" %}

* This warning receiver solely detects lasers aimed near it.

These type of radars are capable of detecting entire vehicles and giving data about the common position and velocity of the vehicle.
* Detected : Returns 1 if the receiver is detecting a radar signal.
* Direction: Returns VECTOR of the detected radar.
* Angle    : Returns VECTOR of the detected radar.
* Entity   : The radar reciever itself (ENTITY).