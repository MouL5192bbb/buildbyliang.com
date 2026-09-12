# buildbyliang.com

> 一个 C++ 程序员，记录 AI Infra、嵌入式与高性能工程的硬核实战
> A C++ engineer's notes on AI Infra, embedded systems & high-performance engineering

🌐 [buildbyliang.com](https://buildbyliang.com) | 📝 [博客](https://buildbyliang.com/blog) | 💻 [项目](https://buildbyliang.com/projects)

---

## 项目结构

```
buildbyliang.com/
├── src/
│   ├── content/
│   │   └── blog/                  # 博客内容（中英双语）
│   │       ├── zh/                # 中文文章
│   │       └── en/                # 英文文章
│   ├── i18n/                      # 双语文案
│   │   ├── zh.json
│   │   └── en.json
│   ├── components/                # Astro 组件
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── TagList.astro
│   │   └── LanguageSwitcher.astro
│   ├── layouts/                   # 页面布局
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages/                     # 路由（中文）
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── pages/en/                  # 路由（英文）
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── i18n.ts
├── docs/                          # 项目文档
│   ├── cloudflare-pages-deploy.md
│   └── first-blog-template.md
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 技术栈

- **框架**: [Astro 5.x](https://astro.build/) - 极致性能，原生支持 MDX 和 i18n
- **样式**: [Tailwind CSS 3.x](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com/) - 免费、全球 CDN、自动 HTTPS
- **内容**: Markdown + MDX（带 frontmatter）
- **代码高亮**: [Shiki](https://shiki.style/) - 静态分析，性能极佳
- **评论**: [Giscus](https://giscus.app/) - 基于 GitHub Discussions

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

开发服务器默认运行在 http://localhost:4321

## 部署到 Cloudflare Pages

详见 [docs/cloudflare-pages-deploy.md](docs/cloudflare-pages-deploy.md)

简要步骤：
1. 将代码推送到 GitHub
2. 在 Cloudflare Pages 连接 GitHub 仓库
3. 配置构建设置：
   - 构建命令: `npm run build`
   - 输出目录: `dist`
4. 绑定自定义域名 `buildbyliang.com`
5. 每次 push 自动部署

## 写作流程

详见 [docs/first-blog-template.md](docs/first-blog-template.md)

1. 在 `src/content/blog/zh/` 创建新的 `.md` 文件（中文）
2. 在 `src/content/blog/en/` 创建对应的英文版本
3. 编写 frontmatter（标题、描述、标签、日期）
4. 提交 Git，Cloudflare 自动部署

## 内容定位

**30/50/20 黄金三角**：
- **50%** AI Infra / 嵌入式 / 高性能 C++ 实战（主战场）
- **30%** AI 时代程序员的"工作流与思维"
- **20%** 程序员成长与认知

## License

MIT
