import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string().optional(), // Make abstract optional
    date: z.coerce.date(), // Use coerce to handle string dates
    featuredImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    slug: z.string().optional(), // Make slug optional since Astro infers it
  }),
});

export const collections = {
  blog,
};