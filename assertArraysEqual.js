/**
 * assertArraysEqual.js uses aqArrays.js to compare two arrays for an exact match, console.log's an Assertion
 * @param {array} arr1
 * @param {array} arr2
 * Console.log(Assertion pass or fail)
 */


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

assertArraysEqual([5, 6, 7], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true