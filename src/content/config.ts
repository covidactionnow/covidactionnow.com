import { z, defineCollection } from "astro:content";

const distro = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string(),
      website: z.string().url().optional(),
      email: z.string().email().optional(),
      insta: z.string().optional(),
      address: z.string().optional(),
      tel: z.string().optional(),
      latLon: z
        .tuple([z.number().min(-180).max(180), z.number().min(-90).max(90)])
        .optional(),
      description: z.string().optional(),
    }),
  ),
});

const locale = defineCollection({
  type: "data",
  schema: z.record(
    z.string(),
    z.object({ en: z.string().min(1), fr: z.string().min(1) }),
  ),
});

export const collections = { distro, locale };
