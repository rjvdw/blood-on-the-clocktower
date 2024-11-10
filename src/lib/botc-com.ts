import type { CollectionEntry } from 'astro:content'

type Character = CollectionEntry<'characters'>

/**
 * Returns an ID that is compatible with the IDs used by [bloodontheclocktower.com](https://script.bloodontheclocktower.com)
 */
export function getBotcId(character: Character): string {
  return character.data.botcId ?? character.slug.replaceAll('-', '')
}
