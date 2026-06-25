import { DefaultTheme } from "vitepress";

export default {
  "/users": [
    {
      text: "For Users",
      link: "/users",
      items: [
        { text: "⏳ Development Status", link: "/users/dev-status" },
        { text: "📋 View changelogs", link: "https://modrinth.com/mod/create-metallurgy/changelog" },
        { text: "📆 Roadmap", link: "/users/roadmap" },
        { text: "❓ FAQ", link: "/users/faq" },
      ],
    },
  ],
} as DefaultTheme.SidebarMulti;