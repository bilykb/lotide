/**
 * a function that accepts a string as an argument, and returns an object with an array of indexes for each letter
 * @param {string} sentence a string of characters
 * @return {object} object of characters and index positions
 */

const letterPositions = function(sentence) {
  const indexList = {};
  if (typeof sentence !== "string") {
    throw new Error("Error Will Robinson!");
  }

  sentence = sentence.trim();
  
  for (let index = 0; index < sentence.length; index++) {
    const letter = sentence[index];
    // variable created to increase readability of code

    if (letter !== " ") {
      if (!indexList[letter]) {
        indexList[letter] = [index];
      } else {
        indexList[letter].push(index);
      }
    }
  }
  return indexList;
};

module.exports = letterPositions;