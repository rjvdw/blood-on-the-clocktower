import { getCollection, type CollectionEntry } from 'astro:content'

export type Character = CollectionEntry<'characters'>
export type CharacterType = Character['data']['type']

export async function getCharacters(filter?: (character: Character) => boolean) {
  return (await getCollection('characters', filter)).toSorted((c1, c2) =>
    (c1.filePath ?? c1.id).localeCompare(c2.filePath ?? c2.id),
  )
}
