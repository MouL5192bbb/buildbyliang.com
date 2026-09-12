# Cloudflare Pages 部署教程（域名注册完成后操作）

> 适用场景：你已经在阿里云/腾讯云注册了 `buildbyliang.com`，现在想把它部署到 Cloudflare Pages，实现全球 CDN 加速 + 自动 HTTPS。
> 预计耗时：20-30 分钟（首次）

---

## 📋 前置准备

- [x] 域名 `buildbyliang.com` 已注册（阿里云/腾讯云/其他注册商）
- [x] 一个 Cloudflare 账号（https://dash.cloudflare.com/sign-up 免费注册）
- [x] 一个 GitHub 账号
- [x] 本项目代码已推送到 GitHub 仓库

---

## 第一步：把代码推送到 GitHub

```bash
# 在项目根目录执行
cd D:\PersonalWebsite\buildbyliang.com

# 初始化 git
git init
git add .
git commit -m "init: buildbyliang.com personal site"

# 在 GitHub 创建新仓库 buildbyliang.com（不要勾选 README）
# 然后关联并推送
git remote add origin https://github.com/你的用户名/buildbyliang.com.git
git branch -M main
git push -u origin main
```

---

## 第二步：在 Cloudflare 创建 Pages 项目

1. 登录 https://dash.cloudflare.com/
2. 左侧菜单选择 **Workers 和 Pages** → **Pages**
3. 点击 **"连接到 Git"**（Connect to Git）
4. 选择 **GitHub**，授权 Cloudflare 访问你的仓库
5. 选择仓库：`你的用户名/buildbyliang.com`
6. 点击 **"开始设置"**

### 构建设置

| 配置项 | 填写内容 |
|--------|---------|
| **项目名称** | `buildbyliang-com`（或自定义，最终影响 `xxx.pages.dev`） |
| **生产分支** | `main` |
| **框架预设** | `Astro` |
| **构建命令** | `npm run build` |
| **构建输出目录** | `dist` |
| **环境变量** | （暂不需要） |

7. 点击 **"保存并部署"**

### 首次部署

- Cloudflare 会自动运行 `npm install` → `npm run build` → 部署到 `*.pages.dev`
- 通常 **2-5 分钟** 完成
- 部署成功后会得到一个临时域名，例如：`buildbyliang-com.pages.dev`

---

## 第三步：绑定自定义域名 buildbyliang.com

部署成功后，绑定你自己的域名：

1. 在 Pages 项目页面，点击 **"自定义域"**（Custom domains）标签
2. 点击 **"设置自定义域"**
3. 输入：`buildbyliang.com`
4. 点击 **"继续"**
5. Cloudflare 会告诉你需要添加的 DNS 记录（通常是一个 CNAME）

### 情况 A：DNS 已经在 Cloudflare

如果你的域名 NS 已经指向 Cloudflare，DNS 记录会自动添加，无需手动操作。

### 情况 B：DNS 在阿里云（推荐首次部署）

如果你暂时不想迁移 NS，DNS 还在阿里云，需要在阿里云后台手动添加一条 CNAME 记录：

1. 登录阿里云 → 域名控制台 → `buildbyliang.com` → 解析设置
2. 添加记录：
   - **记录类型**: CNAME
   - **主机记录**: @
   - **记录值**: `buildbyliang-com.pages.dev`（你的 Pages 项目域名）
   - **TTL**: 10 分钟
3. 同时添加 `www` 子域：
   - **记录类型**: CNAME
   - **主机记录**: www
   - **记录值**: `buildbyliang-com.pages.dev`

---

## 第四步：等待 SSL 证书自动签发

- Cloudflare 会自动申请并签发 SSL 证书
- 通常 **1-5 分钟** 完成
- 完成后访问 https://buildbyliang.com 应该能看到你的网站 🎉

---

## 第五步：自动部署已配置

现在每次你 `git push` 到 main 分支：

```bash
git add .
git commit -m "new post: xxx"
git push
```

Cloudflare 会自动：
1. 拉取最新代码
2. 运行 `npm run build`
3. 部署到生产环境
4. 1-3 分钟内全网生效

---

## 🔧 高级配置（可选）

### 配置自定义域名跳转

在 Cloudflare Pages → Custom domains：

- `buildbyliang.com` → 主域
- `www.buildbyliang.com` → 自动跳转到主域

### 配置访问分析

Pages 项目 → **Analytics** 标签 → 启用 Web Analytics（免费）

### 配置 Giscus 评论系统

域名注册完成后启用评论区：

1. 在 GitHub 创建一个 Discussions 仓库（建议命名为 `buildbyliang-comments`）
2. 访问 https://giscus.app/zh-CN
3. 输入仓库名，生成配置
4. 在 `src/layouts/PostLayout.astro` 中替换评论占位代码

---

## 🚨 常见问题

### Q1：部署失败，提示 "Build failed"
A：通常是依赖问题。在本地运行：
```bash
npm install
npm run build
```
如果本地也失败，按报错修复后重新 push。

### Q2：网站打不开，显示 522 / 1016 错误
A：DNS 未生效。等待 5-30 分钟，或检查：
```bash
nslookup buildbyliang.com
```
应该解析到 Cloudflare 的 IP。

### Q3：中文显示乱码
A：在 `astro.config.mjs` 中确认 `i18n.defaultLocale: 'zh'`，HTML lang 标签为 `zh-CN`。

### Q4：如何回滚到上一个版本？
A：Cloudflare Pages → 部署历史 → 选择历史版本 → "回滚到此部署"。

---

## 📊 部署后的验证清单

部署完成后，逐项检查：

- [ ] https://buildbyliang.com 能正常打开
- [ ] HTTPS 锁标志显示正常
- [ ] 中文首页（`/`）和英文首页（`/en/`）都能访问
- [ ] 顶部导航切换语言正常
- [ ] 博客列表（`/blog`）能打开
- [ ] 第一篇博客《你好，世界》能正常阅读
- [ ] RSS 订阅（`/rss.xml`）能访问
- [ ] 404 页面（访问不存在的 URL）正常

全部 ✅ 后，恭喜你的个人站正式上线！

---

## 💰 年度成本总结

| 项目 | 费用 |
|------|------|
| 域名 `buildbyliang.com` | 约 ¥70-90/年 |
| Cloudflare Pages | ¥0（免费额度：无限站点、无限请求、无限带宽） |
| Cloudflare SSL | ¥0（自动签发、自动续期） |
| Cloudflare DNS | ¥0 |
| **合计** | **约 ¥70-90/年** |

完美符合你的预算！🚀
