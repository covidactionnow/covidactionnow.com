import { z, defineCollection } from "astro:content";

const locale = defineCollection({
  type: "data",
  schema: z.record(
    z.string(),
    z.object({ en: z.string().min(1), fr: z.string().min(1) }),
  ),
});

export const collections = { locale };
