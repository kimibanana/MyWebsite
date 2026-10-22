import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const resourceCategories = ['AI Search', 'SEO', 'Local SEO', 'Google Ads', 'Websites & Content'] as const;

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(resourceCategories),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { resources };
