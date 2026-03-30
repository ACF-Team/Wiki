---
title: Your First Car (WIP)
parent: Getting Started
nav_order: 6
---

For this tutorial we will use an example 6x6 car with an all wheel drive.

We will cover how to setup:
1. Car suspension
2. AIO settings for cars

{% include image.html src="first_car/start.png" %}

Note how the drivetrain is setup, with power from the engine going to an inline, then to transfer cases powering all wheels.

We recommend this arrangement or similar for armored cars.

{% include image.html src="first_car/drivetrain.png" %}

ACF cars require steer plates, which wheels are constrained to. To turn, the angle of the plates are set by the AIO.

{: .highlight}
> MAKE SURE YOUR STEER PLATES AND BASE PLATE ALL FACE NORTH.
>
> You can use the stacker tool to check this. Make sure they're aligned by using `SHIFT + E` with the physgun.

Also make sure to disable gravity on your steer plates by using the physical properties tool.

{% include clip.html src="first_car/steerplates.mp4" %}

Now, Using the suspension too:
1. `SHIFT + RIGHT CLICK` your baseplate
2. `RIGHT CLICK` wheels that should be aligned with your baseplate
3. `SHIFT + RIGHT CLICK` your front steer plate
4. `RIGHT CLICK` wheels that should be aligned with the front steer plate
3. `SHIFT + RIGHT CLICK` your rear steer plate
4. `RIGHT CLICK` wheels that should be aligned with the rear steer plate

{% include clip.html src="first_car/suspension.mp4" %}

Now, open your AIO controller's settings:

{% include image.html src="first_car/aio.png" width="25%" %}

Brake settings:
- `BrakeStrength` at `SpeedLow`
- `BrakeStrengthTop` at `SpeedTop`
- Anything between is interpolated (e.g. half way on the speed range)

The SteerPercent variables represent the percentage of the brake force value to use.

For example, if the current brake force is 45:
- A SteerPercent of 1 will be an angle of 45.
- A SteerPercent of -0.5 will be an angle of 22.5 in the opposite direction.

`SteerPercent1` represents the front steer pair, `SteerPercent2` is the steer pair behind that, `SteerPercent3` is the steer pair behind that and `SteerPercent4` is for the rearmost steer pair.

`SteerRate` represents the rate at which the wheels turn towards their target angle.