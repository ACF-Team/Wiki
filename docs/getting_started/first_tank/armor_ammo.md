---
title: Armor/Ammo
parent: Your First Tank
nav_order: 8
---

# Armor
You can use armor to protect your vehicle from munitions.

{% include clip.html src="armor_ammo/demo.mp4" %}

## Thickness
Higher penetration threats require thicker effective armor to defeat.

In the clip above, 100mm is more than thick enough to stop a machine gun, but it is not enough for the high penetration rounds from a cannon.

Effective armor is the "line of sight" thickness that the bullet must pass through.

{% include image.html src="armor_ammo/effective.png" %}

A thinner angled plate can have the same effective thickness as a thicker flat plate.

{% include clip.html src="armor_ammo/angle.mp4" %}

> If you are interested, you can calculate effective armor with this formula:
>
> $$
> \text{Effective Armor} = \frac{\text{Nominal Thickness}}{\sin(\theta)}
> $$

Tanks generally concentrate most of their armor at the front, then the sides, then the rear/roof/floor.

## Health (Ductility)
With the same thickness, a healthier prop will last longer under attack.

Setting the ductility of a prop can change its health at the cost of weight, or vice versa.

{% include clip.html src="armor_ammo/health.mp4" %}

# Armor Tool
Using the ACF armor tool, you can set the thickness and ductility of a prop:

{% include clip.html src="armor_ammo/tool.mp4" %}

# Armor Setup
We will begin armoring the tank we worked on. If you want to follow along, download this dupe:

{% include file.html src="before_armor.txt" text="Starting Dupe" %}

Start with your side armor.

{% include clip.html src="armor_ammo/setup1.mp4" %}


# Ammo