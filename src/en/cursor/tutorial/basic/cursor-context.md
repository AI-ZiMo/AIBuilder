---
title: Cursor上下文
category:
  - Cursor
---
Cursor的上下文感知能力是它与其他AI编码工具的区别所在。它不仅仅看到你正在工作的文件；它理解你的整个代码库。这种深入的理解使Cursor的许多功能得以实现，从而提供更准确和相关的帮助。
## @ 符号: 你的上下文最强神器
<VidStack src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fbdd16b24a4cb45a9a3bf5a9f2faf1385%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=bdd16b24a4cb45a9a3bf5a9f2faf1385&alt=media&optimized=true" autoplay loop/>
Cursor使用@符号作为强大的方式来引用不同类型的上下文。无论你使用⌘ K、Chat还是Composer，@符号都能让你快速访问文件、代码片段、文档等。

以下是快速概述：

- **@Files:** 引用项目中的整个文件。
- **@Folders:** 引用整个文件夹。
- **@Code:** 引用代码的特定部分。
- **@Docs:** 访问预索引的第三方文档或添加你自己的文档。
- **@Git:** 在Chat中添加git提交、差异或拉取请求。
- **@Codebase:** 让Cursor扫描你的整个代码库以获取上下文。
- **@Web:** 让Cursor搜索互联网以获取相关信息。
- **@Chat and @Definitions:** 在⌘ K中，包括聊天消息或附近的代码定义作为上下文。
你甚至可以粘贴带有@前缀的链接，让Cursor纳入该网页资源。

如果你想让Cursor保持专注，可以使用.cursorignore文件（类似于.gitignore）来排除特定的文件或目录。

例如，我们可以使用@Web来允许AI搜索网络以获取答案。

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfVRoDeEfdpOq9JmPhRaxYDWiZA3qUctWyc8niArF2f31cdN8Hv4STdNQigF_enPAbae6NxpSRjSvDZWLzNKdXDZfZl5uvETPisTK-nXW4ggN8Fv2yC_J09V5NXdJb23Xc9-SHlnUXcph343yOvw1QYewtA?key=HyD5If9cdm6cekgVxdDsoA)