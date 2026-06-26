---
prev: true
---

# 📌 Request Yours

Feel free to request your integrations in the [Wiki's Github Page](https://github.com/Lucreeper74/CreateMetallurgy-Wiki/issues) or directly in the official [C:Metallurgy Discord](https://discord.com/invite/KGQr5a2qc9) 🎉!

## 💣 Create Big Cannon C:BC Integration <Badge type="info" text="Last Update 25/06/26" /> {#create-bc}
Made by **`Benjamin McIntyre`**

📟 Script Source code : [`cmc-cbc-integration.js`](https://gist.github.com/BenMac31/369cdfaec306f88cb9a0016f8c5b6f4a) (Github Gist)

> [!CAUTION] REQUIREMENTS
> Following mods must be installed : [Create](https://modrinth.com/mod/create), [Create Metallurgy](https://modrinth.com/mod/create-metallurgy), [Create Big Cannons](https://modrinth.com/mod/create-big-cannons)

### 🧾 `Description`
Replaces all native CBC forging / alloying / melting / basin-foundry recipes with Create Metallurgy equivalents (alloying, casting_in_table, casting_in_basin, melting). Also hides duplicate CBC items/fluids from JEI where Create Metallurgy provides the canonical version.

### `📋 Instructions`
Split the script into two scripts :
- `kubejs/startup_scripts/`  -> lines from `JEIEvents` down to end of `hideFluids`.
- `kubejs/server_scripts/`   -> everything from `ServerEvents.tags` downward.\
    *(Or just drop the whole file into startup_scripts/ — ServerEvents will still
    register, just avoid having duplicate event listeners.)*