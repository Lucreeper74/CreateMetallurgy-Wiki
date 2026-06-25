import { defineConfig } from 'vitepress'
import users from "./sidebars/users";
import developers from "./sidebars/developers";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Create Metallurgy Wiki",
  description: "Advanced Metallurgy and Stylish Automation Systems",
  base: '/CreateMetallurgy-Wiki/',

  cleanUrls: true,
  lastUpdated: true,

  srcDir: "src",
  srcExclude: ["**/README.md"],

  head: [["link", { rel: "icon", href: "/assets/createmetallurgy-icon-large.webp" }]],

  themeConfig: {
    logo: {
      src: "/assets/createmetallurgy-icon-large.webp",
      width: 24,
      height: 24,
    },

    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      ...users,
      ...developers,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lucreeper74/Create-Metallurgy' },
      { icon: "discord", link: "https://discord.gg/KGQr5a2qc9" },
    ]
  },

  markdown: {
    emoji: {
      defs: {
        'neoforge':        '<img src="/assets/neoforge-small.png" style="display:inline;height:1.5em;vertical-align:middle;" alt="neoforge-icon" />',
        'neoforge-banner': '<img src="/assets/neoforge-banner.png" style="display:inline;height:1.5em;vertical-align:middle;" alt="neoforge-banner" />',
        'fabric':          '<img src="/assets/fabric.png" style="display:inline;height:1.5em;vertical-align:middle;" alt="neoforge-banner" />',
        'mc':              '<img src="/assets/mc.png" style="display:inline;height:1.5em;vertical-align:middle;" alt="mc-icon" />',
        'kjs':             '<img src="/assets/kjs.png" style="display:inline;height:1.5em;vertical-align:middle;" alt="kjs-icon" />',
      }
    }
  }
})
