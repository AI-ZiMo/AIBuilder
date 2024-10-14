import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI Builder",
  description: "AI正在改变世界，你也可以成为其中一员。",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
