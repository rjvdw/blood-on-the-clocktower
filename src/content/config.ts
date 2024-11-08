import { defineCollection } from 'astro:content'
import characterSchema from './schema/character'

export const collections = {
  characters: defineCollection({
    type: 'content',
    schema: characterSchema,
  }),
}
