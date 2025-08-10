import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: "Jon Haddow's Blog",
    description: 'Thoughts on web development and technology',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.abstract || '',
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}