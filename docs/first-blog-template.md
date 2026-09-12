# 第一篇博客写作指南

> 本指南帮你 30 分钟内完成第一篇博客的发布。

---

## 📝 文章 frontmatter 模板

在 `src/content/blog/zh/` 下新建文件，例如 `hello-world.md`：

```markdown
---
title: '你的文章标题'
description: '一句话描述文章内容（80-150 字，SEO 关键）'
pubDate: 2026-09-12
updatedDate: 2026-09-15    # 可选：更新日期
tags: ['cpp', 'ai-infra']  # 3-5 个标签
locale: 'zh'                # 必填：zh 或 en
draft: false                # true 表示草稿，不会被构建
---

## 正文从这里开始

用标准的 Markdown 语法撰写。

## 二级标题

### 三级标题

代码块支持语法高亮：

\`\`\`cpp
#include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

行内代码 \`vector<int>\` 这样写。

引用：
> 这是一段引用。

列表：
- 项目 1
- 项目 2
- 项目 3

链接：[buildbyliang.com](https://buildbyliang.com)
```

---

## 🎯 选题清单（按推荐优先级）

### 必发（第 1 周）

1. **《我是谁，为什么做这个站》** ← 已提供模板（`hello-world.md`）

### 强烈推荐（第 2-4 周）

2. **《C++ 程序员如何用 Claude Code 重构一个 10 万行的老项目》**
   - 实战类，最能立人设
   - 流程：场景描述 → 工具链配置 → 实际重构示例 → 效率数据对比
   - 预计长度：3000-5000 字

3. **《从零读懂 vLLM 的 PagedAttention》**（或任一推理引擎源码剖析）
   - 选你最近正在学的引擎
   - 流程：背景知识 → 核心数据结构 → 关键流程图 → 一段代码走读
   - 预计长度：5000-8000 字

4. **《嵌入式 AI 部署实战：在 RK3588 上跑通 YOLOv8》**
   - 你工作中的实际项目
   - 流程：硬件选型 → 模型转换 → 量化 → 部署 → 性能数据
   - 预计长度：4000-6000 字

### 可选（第 5-8 周）

5. 《CUDA 优化实战：一个 kernel 性能提升 8 倍的过程》
6. 《我的 C++ 项目脚手架：开箱即用 CMake + Conan + CI》
7. 《大学生如何入门 C++ 系统编程》（破圈文）
8. 《AI 工具在底层 C++ 项目中的边界》（思考类）

---

## ✍️ 写作心法

### 标题模板（SEO 友好）

**坏标题** ❌
- "学习一下 C++ 协程"
- "vLLM 笔记"
- "关于 AI 的一些思考"

**好标题** ✅
- "C++ 20 协程实战：把异步 HTTP 服务吞吐量提升 3 倍"
- "从零读懂 vLLM 的 PagedAttention：显存管理的艺术"
- "AI 时代，程序员的核心竞争力是什么？"

**公式**：`[技术点] + [实战场景] + [量化结果/对比]`

### 开头三句话决定生死

读者在前 3 句话决定是否继续读。建议结构：

> 1. **痛点共鸣**："你是不是也遇到过...？"
> 2. **本文价值**："这篇文章会讲清楚..."
> 3. **前置要求**："需要你了解..."

### 代码块尽量带注释

```cpp
// 关键步骤：这里就是 PagedAttention 的核心
// 把 KV Cache 切成固定大小的 block，避免传统 attention 的碎片化
auto block_size = 16;  // 每个 block 存 16 个 token 的 KV
auto block_table = allocateBlockTable(seq_len);  // 维护 seq → blocks 的映射
```

### 配图增强可读性

- 流程图、架构图、数据对比图（用 draw.io / Excalidraw 画）
- 性能对比表格
- 截图（特别是 UI、Profiler、调试器）

---

## 🌐 双语策略

### 不需要全量翻译

**建议节奏**：
1. 先发中文完整版
2. **1-2 周后**用 AI 辅助生成英文初稿
3. 你亲自润色（检查术语准确性、补充文化语境）

### 文件命名规范

```
src/content/blog/zh/    →    src/content/blog/en/
hello-world.md          →    hello-world.md
cpp-coroutine.md        →    cpp-coroutine.md
```

> 同一个 slug，中英文一一对应，便于语言切换。

### 用 frontmatter 关联双语

```yaml
# 中文版
locale: 'zh'
translationSlug: 'cpp-coroutine'  # 对应英文文件 ID

# 英文版
locale: 'en'
translationSlug: 'cpp-coroutine'
```

---

## 📅 发布节奏建议

### 每周 10 小时分配

| 任务 | 时间 |
|------|------|
| 选题 + 资料搜集 | 2h |
| 实际写代码 / 做实验 | 3h |
| 写文章 | 3h |
| 校对 + 配图 + 发布 | 2h |

### 固定发布日期

建议定在 **每周三上午** 发布（程序员最活跃的时间段），形成读者的期待感。

---

## ✅ 发布前自检清单

- [ ] 标题清晰、有钩子
- [ ] description 80-150 字
- [ ] 文章长度 2000+ 字（深度文）
- [ ] 至少 2 个代码块带注释
- [ ] 至少 1 张图（流程图 / 表格 / 截图）
- [ ] tags 3-5 个
- [ ] 引用 / 链接格式正确
- [ ] 错别字检查（用 Grammarly 或 ChatGPT 辅助）
- [ ] `npm run build` 本地测试通过

---

## 🚀 发布流程

```bash
# 1. 本地预览
git add src/content/blog/zh/新文章.md
npm run dev   # 浏览器访问 http://localhost:4321/blog/新文章

# 2. 确认无误
npm run build  # 确保能编译通过

# 3. 提交
git add .
git commit -m "post: 新文章标题"
git push

# 4. 等待自动部署（1-3 分钟）
# 5. 访问 https://buildbyliang.com/blog/xxx 验证

# 6. 同步到第三方平台（增加曝光）
# - 知乎专栏
# - CSDN
# - 掘金
# - Dev.to（英文）
# 全文复制 + 末尾加一行："原文链接：https://buildbyliang.com/blog/xxx"
```

---

## 💡 写不出东西怎么办？

### 没关系。不发比水好。

每周可以写"零碎记录"到 `~/notes/` 本地文件，积累 2-3 周后再整合成深度文。

**写作瓶颈期正常，停下来观察、读书、做项目，灵感会自己回来。**

---

🎯 **现在打开 `src/content/blog/zh/hello-world.md`，把内容改成你自己的故事，30 分钟内发布！**
