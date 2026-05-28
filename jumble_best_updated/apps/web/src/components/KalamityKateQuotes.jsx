// A collection of boomer-friendly, sassy quotes for when no word matches are found.

export const kalamityKateQuotes = [
  "Well, that's either a typo... or ancient Viking! 🪓",
  "Honey, even my reading glasses couldn't crack that one!",
  "That's not a word — that's the sound I make getting out of bed 😅",
  "Nice try! Are those even from the same game? 😄",
  "404: Word Not Found. But Kalamity Kate never gives up! 😎"
];

/**
 * Returns a random quote from the Kalamity Kate quotes list.
 * @returns {string} A randomly selected funny quote.
 */
export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * kalamityKateQuotes.length);
  return kalamityKateQuotes[randomIndex];
};