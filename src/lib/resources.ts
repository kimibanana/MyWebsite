import { getCollection, type CollectionEntry } from 'astro:content';
import { resourceCategories } from '../content.config';

export type Resource = CollectionEntry<'resources'>;

export const categorySlug = (c: string) => c.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const categories = resourceCategories.map((name) => ({ name, slug: categorySlug(name) }));

export async function getResources(): Promise<Resource[]> {
  const all = await getCollection('resources');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const readingTime = (r: Resource) => Math.max(1, Math.round((r.body ?? '').split(/\s+/).length / 220));

export const formatDate = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
