import { DefaultTheme } from "vitepress";

export default {
  "/developers": [
    {
      text: "For Developers",
      link: "/developers",
      items: [
        {
          text: "🏷 Useful Tags", link: "/developers/tags",
          collapsed: true,
          items: [
            {
              text: "Block Tags",
              link: "/developers/tags#block-tags",
            },
            {
              text: "Item Tags",
              link: "/developers/tags#item-tags",
            },
            {
              text: "Fluid Tags",
              link: "/developers/tags#fluid-tags",
            },
            {
              text: "Entity Tags",
              link: "/developers/tags#entity-tags",
            },
          ],
        },
        {
          text: "🧩 KubeJS Integration", link: "/developers/kjs-integration",
          collapsed: true,
          items: [
            {
              text: "🍲 Recipes",
              items: [
                {
                  text: "Melting",
                  link: "/developers/kjs-integration/recipes#melting",
                },
                {
                  text: "Alloying",
                  link: "/developers/kjs-integration/recipes#alloying",
                },
                {
                  text: "Grinding",
                  link: "/developers/kjs-integration/recipes#grinding",
                },
                {
                  text: "Casting Recipes",
                  collapsed: true,
                  items: [
                    {
                      text: "Casting In Table",
                      link: "/developers/kjs-integration/recipes#casting-in-table",
                    },
                    {
                      text: "Casting In Basin",
                      link: "/developers/kjs-integration/recipes#casting-in-basin",
                    },
                  ],
                },
                {
                  text: "Crucibles Recipes",
                  collapsed: true,
                  items: [
                    {
                      text: "Bulk Melting",
                      link: "/developers/kjs-integration/recipes#bulk-melting",
                    },
                    {
                      text: "Entity Melting",
                      link: "/developers/kjs-integration/recipes#entity-melting",
                    },
                  ],
                },
              ],
            },
            {
              text: "🪛 Additional",
              items: [
                {
                  text: "🔥 HeatJS Compatibility",
                  link: "/developers/kjs-integration/heatjs-compat",
                },
                {
                  text: "🧁 Custom Molds",
                  link: "/developers/kjs-integration/custom-molds",
                },
                {
                  text: "🎀 Community Scripts",
                  link: "/developers/kjs-integration/community-scripts",
                  collapsed: true,
                  items: [
                    {
                      text: "💣 C:BC Integration",
                      link: "/developers/kjs-integration/community-scripts#create-bc",
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;