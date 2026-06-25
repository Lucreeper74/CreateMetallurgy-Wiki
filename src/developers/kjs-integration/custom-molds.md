---
prev: true
---

# 🧁 Custom Molds

## Item Declaration <Badge type="danger" text="⚠️ Startup script" /> 
```javascript
StartupEvents.registry("item", (event) => {
    event
        .create("graphite_pickaxe_mold")
        .displayName("Pickaxe Head Mold")
        .maxStackSize(64);
});
```

::: tip NOTE
For further information about textures and special item behaviors, see [KubeJS Item Registry Wiki Page](https://kubejs.com/wiki/tutorials/item-registry) :kjs:.
:::
 

## Usage Example <Badge type="danger" text="⚠️ Server script" />
```javascript
event.recipes.createmetallurgy
    .casting_in_table("minecraft:diamond_pickaxe", [
        Fluid.of("createmetallurgy:molten_iron", 10),
        "kubejs:graphite_pickaxe_mold",
    ])
    .processingTime(400);
    .moldConsumed(); // leave out if you do not want mold to be consumed
```
