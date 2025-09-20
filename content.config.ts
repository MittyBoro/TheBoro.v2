import { defineContentConfig, defineCollection, property } from '@nuxt/content'
import { z } from 'zod/v4'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
        // image: property(z.string()).editor({ input: 'media' }),
      }),
    }),
  },
})
