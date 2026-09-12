import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客内容集合 - 双语
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // 标记语言版本
      locale: z.enum(['zh', 'en']).default('zh'),
      // 可选：英文版对应的中文版 slug（用于双语关联）
      translationSlug: z.string().optional(),
      // 可选：草稿状态
      draft: z.boolean().default(false),
      // 可选：封面图
      heroImage: image().optional(),
    }),
});

export const collections = { blog };
