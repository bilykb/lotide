/**
 * eqObjects() is a function that compares two objects, and returns an Assertion pass or fail
 * @param {object} object1 
 * @param {object} object2 
 */

const eqObjects = function(object1, object2) {

}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

