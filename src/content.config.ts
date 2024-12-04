import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import characterSchema from './content/schema/character'

export const collections = {
  characters: defineCollection({
    loader: glob({
      pattern: '**/*.md',
      base: './src/content/characters',
      generateId: (options) => {
        if (typeof options.data.id === 'string') {
          return options.data.id
        }

        return options.entry.match(/.*\/(?:[0-9]+-)?(.+)\.md$/)![1]!
      },
    }),
    schema: characterSchema,
  }),
}
