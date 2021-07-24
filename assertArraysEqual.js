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

assertArraysEqual([5, 6, 7], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], [1, 2, 3]); // true