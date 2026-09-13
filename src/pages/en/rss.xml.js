import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { getPostSlug } from '~/utils/posts';

// English RSS feed at /en/rss.xml
export async function GET(context) {
  const posts = (
    await getCollection('blog', ({ data }) => {
      return data.locale === 'en' && !data.draft;
    })
  ).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: 'buildbyliang',
    description:
      "A C++ engineer's notes on AI Infra, embedded systems & high-performance engineering",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${getPostSlug(post.id, post.data)}`,
      categories: post.data.tags,
    })),
    customData: '<language>en-US</language>',
  });
}
