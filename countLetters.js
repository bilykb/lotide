/**
 * countLetters.js accepts a string as an argument
 * @param {string}} actual 
 * @return {object}
 */

const countLetters = function(string) {
  const countingObject = {};
  for (const letter of string) {
      if (!countingObject[letter]) {
      countingObject[letter] = 1;
      } else {
        countingObject[letter]++
    }
  }
  return countingObject
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(countLetters("Happy Hharbour"))