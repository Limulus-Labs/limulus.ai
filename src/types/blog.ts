import type { CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;
export type BlogPostPl = CollectionEntry<"pl/blog">;