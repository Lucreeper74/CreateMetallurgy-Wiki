---
prev: false
---

> [!IMPORTANT]
>All recipe scripts need to be in place in `kubejs/server_script/` in order to work. You must place those examples in the **KubeJS** :kjs: recipe callback function (please refer to the [KubeJS Recipes Wiki Page](https://kubejs.com/wiki/tutorials/recipes))

## Melting <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - Poppy -> 80mb of Molten Gold (80 Ticks, Heated)
event.recipes.createmetallurgy
    .melting(Fluid.of("createmetallurgy:molten_gold", 80), "minecraft:poppy")
    .processingTime(80) // In Ticks
    .heated(); // leave this line out, if you dont want any heat condition

// #2 - Poppy -> 80mb of Molten Gold (80 Ticks, Superheated)
event.recipes.createmetallurgy
    .melting(Fluid.of("createmetallurgy:molten_gold", 80), "minecraft:poppy")
    .processingTime(80) // In Ticks
    .superheated();

// #3 - Poppy -> 80mb of Molten Netherite (80 Ticks, Custom Heat Condition)
event.recipes.createmetallurgy
    .melting(Fluid.of("createmetallurgy:molten_netherite", 80) "minecraft:poppy")
    .processingTime(80) // In Ticks
    .heatLevel("lowheated"); // Create HeatJS example
```

::: details
For further information about [HeatJS](https://www.curseforge.com/minecraft/mc-mods/create-heat-js) compatibility, see [HeatJS Compatibility Page](/developers/kjs-integration/heatjs-compat)
:::

## Alloying <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - 150mb of Copper + 150mb of Tin + Poppy -> 300mb of Bronze
event.recipes.createmetallurgy
    .alloying(Fluid.of("createmetallurgy:molten_bronze", 300), [
            Fluid.of("createmetallurgy:molten_copper", 150),
            Fluid.of("createmetallurgy:molten_tin", 150),
            "minecraft:poppy",
        ],
    );

// #2 - 150mb of Gold + 150mb of Silver -> 300mb of Electrum (Heated)
event.recipes.createmetallurgy
    .alloying(Fluid.of("createmetallurgy:molten_electrum", 300), [
            Fluid.of("createmetallurgy:molten_gold", 150),
            Fluid.of("createmetallurgy:molten_silver", 150)
        ])
    .heated();
```

## Grinding <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript 
// #1 - Poppy -> Iron Dust x2 (120 Ticks)
event.recipes.createmetallurgy
    .grinding(Item.of("createmetallurgy:iron_dust", 2), "minecraft:poppy")
    .processingTime(120);

// #2 - Poppy -> Iron Dust x2 + Iron Nugget (100 Ticks)
event.recipes.createmetallurgy
    .grinding(
        [
            Item.of("createmetallurgy:gold_dust", 2),
            Item.of("minecraft:iron_nugget"),
        ],
        "minecraft:poppy",
    )
    .processingTime(100);
```

## Casting Recipes
### Casting In Table <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - 144mb of Iron + Ingot Mold -> Poppy (100 Ticks cooling time)
event.recipes.createmetallurgy
    .casting_in_table("minecraft:poppy", [
        Fluid.of("createmetallurgy:molten_iron", 144),
        "createmetallurgy:graphite_ingot_mold",
    ])
    .processingTime(100);

// #2 - 144mb of Gold + Ingot Mold -> Poppy (80 Ticks cooling time)
event.recipes.createmetallurgy
    .casting_in_table("minecraft:poppy", [
        Fluid.of("createmetallurgy:molten_gold", 144),
        "createmetallurgy:graphite_ingot_mold",
    ])
    .processingTime(80)
    .moldConsumed(); // The mold will be consumed
```

### Casting In Basin <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - 1B of Iron -> Iron Block (200 Ticks cooling time)
event.recipes.createmetallurgy
    .casting_in_basin("minecraft:iron_block", [
        Fluid.of("createmetallurgy:molten_iron", 1000),
    ])
    .processingTime(200);

// #1 - 250mb of Iron + Poppy -> Wither Rose (150 Ticks cooling time)
event.recipes.createmetallurgy
    .casting_in_basin("minecraft:wither_rose", [
        Fluid.of("createmetallurgy:molten_iron", 250),
        "minecraft:poppy", // Basin casting also mold item
    ])
    .processingTime(150);
    .moldConsumed(); // Which can also be consumed
```

## Crucible Recipes
### Bulk Melting <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - Poppy -> 800mb of Iron (300 ticks)
event.recipes.createmetallurgy
    .bulk_melting(
        Fluid.of("createmetallurgy:molten_iron", 800),
        "minecraft:poppy",
    )
    .processingTime(300)
    .minHeatRequirement(-25) // Min Tu value
    .maxHeatRequirement(50); // Max Tu value

// #2 - Poppy -> 800mb of Gold (250 ticks)
event.recipes.createmetallurgy
    .bulk_melting(
        Fluid.of("createmetallurgy:molten_gold", 800),
        "minecraft:poppy",
    )
    .processingTime(250)
    .minHeatRequirement(0)   // Min Tu value
    .maxHeatRequirement(10); // Max Tu value
```

### Entity Melting <Badge type="warning" text="^v1.0.2" /> <Badge type="danger" text="⚠️ Server script" />
```javascript
// #1 - Iron Golem -> 1200mb of Iron + Poppy (6 damage per burn)
event.recipes.createmetallurgy.entity_melting(
    Fluid.of("createmetallurgy:molten_iron", 1200),
    EntityIngredient.of("minecraft:iron_golem", 6),
    "minecraft:poppy",
);

// #2 - Zombie -> 245mb of Copper + Poppy (1 damage per burn)
event.recipes.createmetallurgy.entity_melting(
    Fluid.of("createmetallurgy:molten_copper", 245),
    EntityIngredient.of("minecraft:zombie", 1),
    "minecraft:poppy",
);
```