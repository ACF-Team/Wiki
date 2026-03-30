---
title: Mobility Setup
parent: Your First Tank
nav_order: 4
---

# Setup
Space your wheels away from the baseplate to get a better mechanical advantage while turning:

{% include clip.html src="mobility_setup/spacing.mp4" %}

Set your wheels to 100kg and your baseplate to 500kg:

{% include clip.html src="mobility_setup/weight.mp4" %}

Parent all the entities to the baseplate:

{% include clip.html src="mobility_setup/parent.mp4" %}

Link the:
1. Fuel tanks to the engine
2. Engine to the gearbox
3. Gearbox to the wheels
4. AIO to "main" gearbox

{% include clip.html src="mobility_setup/link.mp4" %}

If you look at the engine, you should see a visualization of your entire drivetrain, showing the transfer of power from the engine to the wheels.

# Suspension tool
Nothing connects the wheels to the baseplate yet.

Select the "ACF Suspension Tool".

`SHIFT + RIGHT CLICK` to select the baseplate. Any wheels you select will now target the baseplate.

`RIGHT CLICK` all your wheels in any order.

Then press the "Create Drivetrain" button.

{% include clip.html src="mobility_setup/suspension.mp4" %}

# Testing
Now copy and paste the dupe to test. You should be able to drive now.

{% include clip.html src="mobility_setup/drive.mp4" %}

Notice that the controls are flipped.

Use the same settings for the gearbox, but flip the final drive to -1.

{% include clip.html src="mobility_setup/flip.mp4" %}

Now the controls should be correct.

The tank will move extremely quickly and may "spazz out".

This is because it is "over torquing" the wheels (the engine is too strong for how light it is).

Once we add armor this issue will go away, but we will need to retune the mobility.