import { sidebar } from "vuepress-theme-hope";

export const zhSidebarConfig =  sidebar({
  "/cursor/projects/": [
    "README.md"
  ],
  "/shequn/": [
    "README.md"
  ],
  "/aitutorial/": [
    {
      text: "一、提示词工程",
      prefix: "prompt/",
      children: [
        "why-prompt-engineering"
      ]
    },
    {
      text: "二、工具使用",
      prefix: "tools/",
      children: [
        "README.md",
        "replit"
      ]
    }
  ],
  //必须放在最后面
  "/": [
    {
      text: "一、前言",
      link: "home"
    },
    {
      text: "二、基础教程",
      collapsible: false,
      prefix: 'cursor/tutorial/basic/',
      children: [
        'what-is-cursor',
        'cursor-install',
        'cursor-autocomplete',
        'cursor-cmd-k',
        'cursor-terminal',
        'cursor-chat-features',
        'cursor-composer',
        'cursor-context',
        'cursor-ai-review',
        'image-support',
        'cursor-rules-for-ai',
        'cursor-models',
        'Global-code-base-questions',
        'cursor-faq'
      ]
    },
    {
      text: "三、进阶教程",
      collapsible: false,
      prefix: 'cursor/tutorial/advanced/',
      children: [

      ]
    }
  ]
});
