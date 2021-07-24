const without = function(arr, valuesToRemove) {
  let newArr = [];

  arr.forEach(() => {
    valuesToRemove.forEach((element2) => {
      newArr = arr.filter(element1 => element1 !== element2);
    });
  });
  return newArr;
};

// function without(arr, valuesToRemove) {
//   const valuesToRemoveSet = new Set(valuesToRemove);
//   let newArr = [];

//   arr.forEach((element1) => {
//     if (!valuesToRemoveSet.has(element1)) {  // not going to remove
//       newArr.push(element1);
//     }
//   });
//   console.log(newArr);
// }
// this was a refactor that I went through with a mentor.  I thought it best just to use my version

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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
