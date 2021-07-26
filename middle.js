/**
 * A function that accepts an array, and returns the middle index value (or values if the array has an even number of elements)
 * @param {*} arr 
 * @returns new Arr
 */

const middle = function(arr) {
  let newArr = [];
  
  if (arr.length < 3) {
    return newArr
  }
  if (arr.length % 2 === 0) {
    newArr = arr.splice((arr.length / 2) - 1,  2);
  } else {
    newArr = arr.splice(Math.ceil((arr.length - 1) / 2), 1);
  }
  return newArr
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
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};


assertArraysEqual(middle([10]), []); // => []
assertArraysEqual(middle([10, 20]), []); // => []
assertArraysEqual(middle([10, 20, 30]), [20]) // => [20]
assertArraysEqual(middle([10, 20, 30, 40, 50]), [30]) // => [30]
assertArraysEqual(middle([10, 20, 30, 40]), [20, 30]) // => [20, 30]
assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]) // [30, 40]