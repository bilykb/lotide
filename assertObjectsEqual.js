/**
 * function assertObjectsEqual() takes two parameters, the actual object, and the expected object, and returns an assertion passed or failed
 * @param {object} actual
 * @param {object} expected
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = { a : "1", b : "2" };
const ba = { b : "2", a : "1" };
const xy = { x : "3", y : "4" };
const yx = { y : "5", x : "1" };
const zx = { z : "3", x : "4" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(xy, yx);
assertObjectsEqual(xy, zx);

const abc = { a : "1", b : "2", c : "3" };
const cd = { c : "1", d : ["2", 3] };
const dc = { d : ["2", 3], c : "1" };
const cd2 = { c : "1", d : ["2", 3, 4] };
const dc2 = { d : ["2", 3, 4], c : "1"  };
const ae = { a : "1", e : ["2", 3, 4] };
const emp1 = {};
const emp2 = {};

assertObjectsEqual(cd, dc);
assertObjectsEqual(ab, abc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ae, cd2);
assertObjectsEqual(cd2, dc2);
assertObjectsEqual(emp1, emp2);