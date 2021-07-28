/**
 * eqObjects.js a function which compares two objects to see if they are similar
 * @param {object} object1
 * @param {object} object2
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);

  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }
  
  for (const key of Object.keys(object1)) {
    const valueOfObject1 = object1[key];
    const valueOfObject2 = object2[key];
    
    if (Array.isArray(valueOfObject1) || Array.isArray(valueOfObject2)) {
      if (!eqArrays(valueOfObject1, valueOfObject2)) {
        return false;
      }
    } else if (valueOfObject1 !== valueOfObject2) {
      return false;
    }
  }
  return true;
};


const ab = { a : "1", b : "2" };
const ba = { b : "2", a : "1" };
const xy = { x : "3", y : "4" };
const yx = { y : "5", x : "1" };
const zx = { z : "3", x : "4" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(xy, yx), false);
assertEqual(eqObjects(xy, zx), false);

const abc = { a : "1", b : "2", c : "3" };
const cd = { c : "1", d : ["2", 3] };
const dc = { d : ["2", 3], c : "1" };
const cd2 = { c : "1", d : ["2", 3, 4] };
const dc2 = { d : ["2", 3, 4], c : "1"  };
const ae = { a : "1", e : ["2", 3, 4] };
const emp1 = {};
const emp2 = {};

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ae, cd2), false);
assertEqual(eqObjects(cd2, dc2), true);
assertEqual(eqObjects(emp1, emp2), true);