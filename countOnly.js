/**
 * a function which tallies how many times specific elements occur within an array
 * @param {array} allItems an array of strings that we need to look through
 * @param {object} itemstoCount an object specifying what to count
 */

const countOnly = function(allItems, itemstoCount) {

}

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