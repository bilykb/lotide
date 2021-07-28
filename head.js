/**
 * head.js is a function that takes an array as an arguement, and returns the head of the array
 * @param {array} array
 * @returns {array[0]} first element of array
 */

const head = function(array) {
  if (array.length && array) {
    return array[0];
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);