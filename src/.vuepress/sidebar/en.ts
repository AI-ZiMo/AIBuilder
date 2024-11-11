import { sidebar } from "vuepress-theme-hope";

export const enSidebarConfig = sidebar({
  "/en/cursor/projects/": [
    "README.md"
  ],
  "/en/shequn/": [
    "README.md"
  ],
  "/en/aitutorial/": [
    {
      text: "一、Prompt Engineer",
      prefix: "prompt/",
      children: [
        "why-prompt-engineering"
      ]
    },
    {
      text: "二、Tool usage",
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
      text: "一、Introduction",
      link: "home"
    },
    {
      text: "二、Basic tutorial",
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
      text: "三、Advanced tutorial",
      collapsible: false,
      prefix: 'cursor/tutorial/advanced/',
      children: [

      ]
    }
  ]
});
