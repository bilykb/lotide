/**
 * flatten.js is a function that takes a nested array with one level of nesting, and returns a single "flattened" array
 * @param {Array} arr
 * @returns {Array}
 */

const flatten = function(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return false;
  }
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(element);
    } else {
      newArr.push(element);
    }
  });
  return newArr;
};

module.exports = flatten;