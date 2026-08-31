import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const sharedFlags = {
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  order: z.number().int().nonnegative().default(0),
};

const publications = defineCollection({
  loader: glob({
    base: "./src/content/publications",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    year: z.number().int().min(1900),
    venue: z.string().optional(),
    publicationType: z
      .enum([
        "journal-article",
        "conference-paper",
        "book-chapter",
        "thesis",
        "preprint",
        "report",
        "manuscript",
        "other",
      ])
      .default("journal-article"),
    status: z.enum(["published", "accepted", "submitted", "in-review", "preprint"]).optional(),
    volume: z.string().optional(),
    issue: z.string().optional(),
    pages: z.string().optional(),
    articleNumber: z.string().optional(),
    isbn: z.string().optional(),
    note: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    pdf: z.string().optional(),
    abstract: z.string().optional(),
    ...sharedFlags,
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["planned", "active", "completed", "on-hold"]).default("active"),
    period: z.string().optional(),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    topics: z.array(z.string()).default([]),
    collaborators: z.array(z.string()).default([]),
    url: z.string().optional(),
    repository: z.string().optional(),
    ...sharedFlags,
  }),
});

const research = defineCollection({
  loader: glob({
    base: "./src/content/research",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    topics: z.array(z.string()).default([]),
    ...sharedFlags,
  }),
});

const news = defineCollection({
  loader: glob({
    base: "./src/content/news",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    url: z.string().optional(),
    ...sharedFlags,
  }),
});

export const collections = { publications, projects, research, news };
