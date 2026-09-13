// 文章工具函数 - 统一处理 slug 计算
// 优先级：urlSlug（URL 用） > slug（内容集合 id 用） > 文件名
export function getPostSlug(
  postId: string,
  frontmatter?: { slug?: string; urlSlug?: string }
): string {
  if (frontmatter?.urlSlug) return frontmatter.urlSlug;
  if (frontmatter?.slug) return frontmatter.slug;
  return (
    postId
      .split('/')
      .pop()
      ?.replace(/\.(md|mdx)$/, '') ?? ''
  );
}
