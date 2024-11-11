---
date: 2024-10-21
title: Cursor 下载安装与注册
category:
  - Cursor
---

## 安装步骤
Cursor AI 为 Linux、Windows 和 MacOS 提供了安装文件，可以在其官网上免费下载。访问Cursor官网(https://www.cursor.com/)
[![Cursor 安装](/images/install-register/cursor.png)](https://www.cursor.com/)

下载相应操作系统的Cursor版本即可。

在 Windows 和 MacOS 上，我们直接从其主页下载安装文件，并像安装其他程序一样安装。

在 Linux 上，它作为 AppImage 文件提供。在执行它之前，我们需要使用以下命令使其可执行：
```bash
chmod a+x cursor-0.40.3x86_64.AppImage
```
然后，我们可以执行它：
```bash
./cursor-0.40.3x86_64.AppImage
```
我们可能需要根据下载的版本替换上述命令中的版本 0.40.3x86_64。有关如何安装 AppImage 文件的更多说明，请访问其网站。
安装后，我们会被提示进行以下配置：
![Cursor 安装](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdmfGx93j7m8_3NvKb1BXnIp4Gh2-WeeygZCsOyWkwV7jtAdn03NCBHm4qp5mVz_qdpzcMSZ403Zyny_R03Re0cysQGgxtntQzfUBeUsQYTJ1gKGLiXsBPA_ePxd6eYI_d7WnG2MkbEf7yJrTSJYOfSGjIl?key=HyD5If9cdm6cekgVxdDsoA)
- 键盘：此选项允许我们配置键盘快捷键。默认情况下，它使用VS Code的快捷键，除非您熟悉列表中的其他代码编辑器，否则我建议使用这个默认设置。
- AI语言：在这里，我们可以选择使用非英语语言与AI交互。
- 代码库范围：启用此选项可以让AI理解整个代码库的上下文。
- 添加终端命令：如果安装了这些命令，它们允许从终端运行Cursor AI编辑器。

## 注册或登录

- 首次打开 Cursor 时，系统可能会提示您注册或登录。按照说明创建账户或访问您现有的账户。
![](/images/install-register/setting.png)
![](/images/install-register/account.png)

- 新用户注册会有14天免费会员,500次高级模型请求调用（GPT-4o、Claude 3.5 Sonnet），一般模型无限次调用（GPT-40-mini,cursor-small）
![](/images/install-register/register.png)


