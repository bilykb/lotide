/**
 * eqArrays compares two arrays to determine if they are similar in elements and length
 * @param {array} arr1
 * @param {array} arr2
 * @return {boolean}
 */

const eqArrays = function(arr1, arr2) {

  if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("Error Will Robinson!")
  }

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

module.exports = eqArrays;


