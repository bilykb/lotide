/**
 * a function that accepts a string as an argument, and returns an object with an array of indexes for each letter
 * @param {string} sentence a string of characters
 */

const letterPositions = function(sentence) {
  const indexList = {};
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (!indexList[letter]) {
        indexList[letter] = Array.of(sentence.indexOf(letter))
      } else {
      }
    }
  };
  return indexList;
}

console.log(letterPositions("Hello World"))

// const eqArrays = function(arr1, arr2) {

//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index] !== arr2[index]) {
//       return false;
//     }
//   }
//   return true;
// };


// const assertArraysEqual = function(arr1, arr2) {

//   if (!eqArrays(arr1, arr2)) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   } else {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   }
// };