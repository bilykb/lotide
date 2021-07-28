/**
 * eqObjects() is a function that compares two objects, and returns an Assertion pass or fail
 * @param {object} object1 
 * @param {object} object2 
 */

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  
  for (const key of Object.keys(object1)) {
    if (typeof object1[key] === "object") {
      if (!eqArrays(object1[key], object2[key])) {
      return false;
      }
    } else if (object1[key] !== object2[key])
      return false;
  }
  return true
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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
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
const dc2 = { d : ["2", 3, 4], c : "1"  }
const ae = { a : "1", e : ["2", 3, 4] }

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(ab, abc), false)
assertEqual(eqObjects(cd, cd2), false)
assertEqual(eqObjects(ae, cd2), false)
assertEqual(eqObjects(cd2, dc2), true)