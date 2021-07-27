/**
 * a function that accepts a string as an argument, and returns an object with an array of indexes for each letter
 * @param {string} sentence a string of characters
 */

const letterPositions = function(sentence) {
  const indexList = {};
  
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

const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(arr1, arr2) {

  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const letter = letterPositions("hello world");

assertArraysEqual(letter["h"], [0]);
assertArraysEqual(letter["e"], [1]);
assertArraysEqual(letter["l"], [2, 3, 9]);
assertArraysEqual(letter["o"], [4, 7]);
assertArraysEqual(letter["w"], [6]);
assertArraysEqual(letter["r"], [8]);
assertArraysEqual(letter["d"], [10]);
assertArraysEqual(letterPositions("hello").e, [1]);
