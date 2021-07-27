/**
 * a function an accepts an object of television shows and their genre, and a string of a television show, then returns the genre if it is considered best in genre
 * @param {object} objectOfGenres an object with a list of best shows by genre
 * @param {string} tvShow a string of a television show name
 * @return {keyof Object}
 */

const findKeyByValue = function(objectOfGenres, tvShow) {

}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
