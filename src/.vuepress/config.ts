import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI Builder",
  description: "人人都是开发者, Let's build!",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
