/**
 * flatten.js is a function that takes a nested array with one level of nesting, and returns a single "flattened" array
 * @param {Array} arr
 * @returns {Array}
 */

const flatten = function(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return false;
  }
  arr.forEach((element) => {
    newArr = newArr.concat(element);
  });
  return newArr;
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
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", "2", ["3", "4"], "5", ["6"]]), ["1", "2", "3", "4", "5", "6"]);
assertArraysEqual(flatten([]), []);