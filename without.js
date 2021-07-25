/**
 * without.js is a function that accepts two arrays: the source array, and an "itemsToRemove" array.  It returns a new array with the items removed.
 * @param {arr} arr 
 * @param {arr} itemsToRemove 
 * @returns {arr}
 */

const without = function(arr, itemsToRemove) {
  let newArr = [];

  arr.forEach(() => {
    itemsToRemove.forEach((element2) => {
      newArr = arr.filter(element1 => element1 !== element2);
    });
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
    return false;
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  return true;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
