export function determineSet(id: string): string | undefined {
  if (is('trouble-brewing')) return 'Trouble Brewing'
  if (is('sects-and-violets')) return 'Sects & Violets'
  if (is('bad-moon-rising')) return 'Bad Moon Rising'
  if (is('travellers-and-fabled')) return 'Travellers and Fabled'
  if (is('garden-of-sin')) return 'Garden of Sin'
  if (is('the-tomb')) return 'The Tomb'
  if (is('midnight-in-the-house-of-the-damned')) return 'Midnight in the House of the Damned'
  if (is('the-greatest-show-on-earth')) return 'The Greatest Show on Earth'
  return undefined

  function is(set: string): boolean {
    return id.substring(4).startsWith(set)
  }
}
