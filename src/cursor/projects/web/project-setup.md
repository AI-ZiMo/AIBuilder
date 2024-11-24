---
date: 2024-11-24
title: 项目初始化
shortTitle: 项目初始化
category:
  - Cursor
  - 全栈
---

## 项目初始化
创建一个 Next.js 14 项目并集成 shadcn-ui 和 Tailwind CSS。以下是详细步骤：

1. 首先创建 Next.js 项目：
```bash
npx create-next-app@latest my-app
```

在安装过程中，会出现以下选项，建议按照下面的选择：
```
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? Yes
Would you like to customize the default import alias? No
```

2. 进入项目目录：
```bash
cd my-app
```

3. 安装和初始化 shadcn-ui：
```bash
npx shadcn-ui@latest init
```

在初始化过程中，会出现以下选项，建议按照下面选择：
```
Would you like to use TypeScript (recommended)? Yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › Yes
Where is your tailwind.config.js located? › tailwind.config.ts
Configure the import alias for components? › @/components
Configure the import alias for utils? › @/lib/utils
Are you using React Server Components? › Yes
```

4. 现在您可以开始安装 shadcn-ui 的组件。例如，安装按钮组件：
```bash
npx shadcn-ui@latest add button
```

5. 修改 `src/app/page.tsx` 来测试安装：
```typescript:src/app/page.tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
    </main>
  )
}
```

6. 启动开发服务器：
```bash
npm run dev
```

现在您已经成功创建了一个包含 Next.js 14、shadcn-ui 和 Tailwind CSS 的项目！

一些补充说明：

1. shadcn-ui 的组件需要按需安装，您可以查看 [shadcn-ui 组件库](https://ui.shadcn.com/docs/components/accordion) 来选择需要的组件。

2. 安装新组件的命令格式：
```bash
npx shadcn-ui@latest add [component-name]
```

3. Tailwind CSS 的配置文件已经自动设置好了，您可以直接使用 Tailwind 的类名。

4. 项目结构应该是这样的：
```
my-app/
  ├── src/
  │   ├── app/
  │   ├── components/
  │   │   └── ui/
  │   └── lib/
  ├── public/
  ├── tailwind.config.ts
  ├── next.config.js
  └── package.json
```