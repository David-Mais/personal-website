import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().min(1).optional(),
    seoDescription: z.string().min(1).optional(),
    canonical: z.string().url().optional(),
    author: z.string().default("Davit Maisuradze"),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    noindex: z.boolean().default(false),
  });

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: blogSchema,
});

const blogKa = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog-ka" }),
  schema: blogSchema,
});

export const collections = { blog, blogKa };
