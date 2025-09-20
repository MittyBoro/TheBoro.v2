import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        published: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        preview: property(z.string()).editor({ input: 'media' }).optional(),
        demo: z.string().url().optional(),
        github: z.string().url().optional(),
      }),
    }),
  },
})
