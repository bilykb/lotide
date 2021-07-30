/**
 * the function takeUntil() will collect items from a provided array until the callback provided returns a truthy value
 * @param {array} array that is queried
 * @param {string} string
 * @param {function} callback the function that evokes per iteration
 */

const takeUntil = function(array, callback) {
  
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, element => element < 0)
console.log(results1)