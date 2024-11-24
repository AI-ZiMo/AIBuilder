---
date: 2024-11-24
title: 项目需求文档
shortTitle: 项目需求文档
category:
  - Cursor
  - 全栈
---

:::important
在正式用Cursor编程之前，我们需要花时间去编写一份详尽的PRD（产品说明文档），以减少后续开发过程中的Bug
:::
## PRD结构

```
# 项目概览

# 核心功能

# 相关文档

# 项目结构

```

## 核心功能拆分

```
# 项目概览
我想实现一个TODO List的网站，用户可以登录，添加、编辑、删除任务，设置任务的截止日期和优先级，以及标记任务为完成。
你将使用NextJS 14+ Shadcn UI+ TailwindCSS+ Lucide Icons + Clerk Auth+ Supabase 来实现这个项目。

# 核心功能
这样用户可以登录这个系统通过Clerk Auth,用户可以创建属于自己的任务，并且通过Supabase来存储任务数据。
----
以上是PRD文档，请我我分解，需要实现的核心功能，以便于Cursor能够理解，并一步一步完成任务。
```
![](https://aibuilder.oss-cn-hangzhou.aliyuncs.com/images202411241224222.png)

## 文件结构生成
因为Cursor有时不太理解项目的文件结构、依赖等，所以需要添加项目结构到PRD中。
![](https://aibuilder.oss-cn-hangzhou.aliyuncs.com/images202411241230503.png)
```
tree -L 4 -I 'node_modules|.git|.next|.turbo|dist|build|coverage|.cache'
```

### 

