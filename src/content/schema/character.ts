import { z } from 'astro:content'

const nightSchema = z.object({
  order: z.number(),
  description: z.string(),
})

export type NightSchemaType = z.infer<typeof nightSchema>

export default z.object({
  name: z.string(),
  botcId: z.string().optional(),
  source: z.string().url().optional(),
  type: z.enum(['Townsfolk', 'Outsider', 'Minion', 'Demon', 'Fabled', 'Traveller']),
  game: z.string().optional(),
  homebrew: z.boolean().default(false),
  tagLine: z.string(),
  nightOrder: z
    .object({
      first: nightSchema.optional(),
      other: nightSchema.optional(),
    })
    .optional(),
})
