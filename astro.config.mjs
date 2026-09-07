import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { readFileSync, readdirSync } from "node:fs";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkCodeFenceMath from "./src/plugins/remark-code-fence-math.mjs";

const blogDirectory = new URL("./src/content/blog/", import.meta.url);
const readFrontmatterDate = (source, field) =>
  source.match(new RegExp(`^${field}:\\s*["']?([^\\s"']+)`, "m"))?.[1];
const publishedBlogPosts = readdirSync(blogDirectory)
  .filter((fileName) => /\.mdx?$/.test(fileName))
  .map((fileName) => {
    const source = readFileSync(new URL(fileName, blogDirectory), "utf8");
    const lastmod =
      readFrontmatterDate(source, "updatedDate") ??
      readFrontmatterDate(source, "pubDate");

    return {
      draft: /^draft:\s*true\s*$/m.test(source),
      lastmod: lastmod
        ? new Date(`${lastmod}T00:00:00.000Z`).toISOString()
        : undefined,
      pathname: `/blog/${fileName.replace(/\.mdx?$/, "")}/`,
    };
  })
  .filter((post) => !post.draft);
const hasPublishedBlogPosts = publishedBlogPosts.length > 0;
const blogLastmod = publishedBlogPosts
  .map((post) => post.lastmod)
  .filter(Boolean)
  .sort()
  .at(-1);

export default defineConfig({
  site: "https://davitmaisuradze.com",
  integrations: [
    mdx(),
    react(),
    sitemap({
      filter: (page) =>
        !page.endsWith("/blogs/") &&
        (hasPublishedBlogPosts || !page.endsWith("/blog/")),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const post = publishedBlogPosts.find(
          (candidate) => candidate.pathname === pathname,
        );

        if (post?.lastmod) item.lastmod = post.lastmod;
        if (pathname === "/blog/" && blogLastmod) item.lastmod = blogLastmod;

        return item;
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkCodeFenceMath],
    rehypePlugins: [rehypeKatex],
  },
});
