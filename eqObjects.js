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

const ab = { a : "1", b : "2" };
const ba = { b : "2", a : "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a : "1", b : "2", c : "3" };
assertEqual(eqObjects(ab, abc), false)