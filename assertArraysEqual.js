const assertArraysEqual = function(arr1, arr2) {
  let passFlag = true;

  if (arr1.length !== arr2.length) {
    console.log( `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    passFlag = false;
  } else {
    for (let index = 0; index < arr1.length; index++) {
      if (arr1[index] !== arr2[index]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`)
        passFlag = false;
        break;
      }
    }
  } if (passFlag) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
}

assertArraysEqual([5, 6, 7], [1, 2, 3]) // false
assertArraysEqual([1, 2, 3], [1, 2, 3]) // true