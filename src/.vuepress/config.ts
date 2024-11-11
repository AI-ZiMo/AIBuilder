import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'AIBuilder.club',
      description: '最佳AI开发学习网站',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Waline',
      description: 'The best AI learning website',
    },
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
