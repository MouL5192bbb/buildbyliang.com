// 文章工具函数 - 统一处理 slug 计算
// 优先使用 frontmatter 的 slug 字段（推荐），回退到文件 id
export function getPostSlug(postId: string, frontmatterSlug?: string): string {
  if (frontmatterSlug) return frontmatterSlug;
  return (
    postId
      .split('/')
      .pop()
      ?.replace(/\.(md|mdx)$/, '') ?? ''
  );
}
