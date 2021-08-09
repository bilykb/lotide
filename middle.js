/**
 * A function that accepts an array, and returns the middle index value(s) in a new array
 * @param {arr} arr
 * @returns newArr
 */

const middle = function(arr) {
  let newArr = arr;
  
  if (arr.length < 3) {
    return newArr = [];
  }
  if (arr.length % 2 === 0) {
    return newArr.splice((arr.length / 2) - 1,  2);
    // takes the length of the array, divides by 2, and subtracts 1 to find the index.
  }
  return newArr.splice(Math.ceil((arr.length / 2) - 1), 1);
  // takes the length of the array, divides by 2, and subtracts 1 to find the index.  Math.ceil is used to change the decimal into an integer
};

module.exports = middle;