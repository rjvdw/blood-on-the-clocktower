import type { Character } from './characters'

export function determineSet(character: Character): string | undefined {
  switch (getSet()) {
    case 'trouble-brewing':
      return 'Trouble Brewing'
    case 'sects-and-violets':
      return 'Sects & Violets'
    case 'bad-moon-rising':
      return 'Bad Moon Rising'
    case 'travellers-and-fabled':
      return 'Travellers and Fabled'
    case 'garden-of-sin':
      return 'Garden of Sin'
    case 'the-tomb':
      return 'The Tomb'
    case 'midnight-in-the-house-of-the-damned':
      return 'Midnight in the House of the Damned'
    case 'the-greatest-show-on-earth':
      return 'The Greatest Show on Earth'
    default:
      return undefined
  }

  function getSet(): string | undefined {
    if (character.filePath) {
      const parts = character.filePath.split('/')
      return parts[parts.indexOf('characters') + 1]?.substring(4)
    }
    return undefined
  }
}
