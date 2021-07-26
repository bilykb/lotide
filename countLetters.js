/**
 * countLetters.js accepts a string as an argument, returns an object with a tally of how many times a letter occurs in a string
 * @param {string} string represents a string of characters
 * @return {object} object with character tally
 */

const countLetters = function(string) {
  const countingObject = {};

  for (const letter of string) {
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const word = countLetters("Happy Harbour Comics");

assertEqual(word["H"], 2);
assertEqual(word["a"], 2);
assertEqual(word["p"], 2);
assertEqual(word["y"], 1);
assertEqual(word[" "], undefined);
assertEqual(word["r"], 2);
assertEqual(word["b"], 1);
assertEqual(word["o"], 2);
assertEqual(word["u"], 1);
assertEqual(word["C"], 1);
assertEqual(word["m"], 1);
assertEqual(word["i"], 1);
assertEqual(word["s"], 1);