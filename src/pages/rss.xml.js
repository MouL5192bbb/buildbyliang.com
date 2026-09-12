import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { defaultLocale } from '~/utils/i18n';

// 中文 RSS
export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => {
    return data.locale === defaultLocale && !data.draft;
  })).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'buildbyliang',
    description: '一个 C++ 程序员，记录 AI Infra、嵌入式与高性能工程的硬核实战',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.replace(/\.(md|mdx)$/, '')}`,
      categories: post.data.tags,
    })),
    customData: '<language>zh-CN</language>',
  });
}
