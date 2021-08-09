/**
 * countLetters.js accepts a string as an argument, returns an object with a tally of how many times a letter occurs in a string
 * @param {string} string represents a string of characters
 * @return {object} object with character tally
 */

const countLetters = function(string) {
  const countingObject = {};

  for (const letter of string.toLowerCase()) {
    if (letter !== " ") {
      if (!countingObject[letter]) {
        countingObject[letter] = 1;
      } else {
        countingObject[letter]++;
      }
    }
  }
  return countingObject;
};

module.exports = countLetters;