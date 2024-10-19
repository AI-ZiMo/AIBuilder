import { arraySidebar } from "vuepress-theme-hope";

export const aboutTheAuthor = arraySidebar([
  {
    text: "个人经历",
    icon: "experience",
    collapsible: false,
    children: [
      "about-me"
    ],
  },
  {
    text: "杂谈",
    icon: "chat",
    collapsible: false,
    children: [
      "zhishixingqiu",
    ],
  },
]);