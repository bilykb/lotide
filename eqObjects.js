/**
 * eqObjects() is a function that compares two objects, and returns an Assertion pass or fail
 * @param {object} object1 
 * @param {object} object2 
 */

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2)) {
    return false;
  }
  //return false
  //loop through object1
  // if property in object 1 !== object 2
  // return false
  //return return true
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