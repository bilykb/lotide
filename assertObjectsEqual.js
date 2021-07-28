/**
 * function assertObjectsEqual()
 * @param {*} actual 
 * @param {*} expected 
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
  
}