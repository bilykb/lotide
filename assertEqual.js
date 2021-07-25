/**
 * Function that compares two primitive data types -actual and expected- console logs whether the assertion passed
 * @param {primitive data type} actual
 * @param {primitive data type} expected
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);