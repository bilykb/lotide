/**
  * a function an searches for a key on an object where its value matches a given value
 * @param {object} objectOfGenres an object with a list of best shows by genre
 * @param {string} tvShow a string of a television show name
 * @return {keyof Object}
 */

const findKeyByValue = function(objectOfGenres, tvShow) {
  
  for (const genre in objectOfGenres) {
    if (objectOfGenres[genre] === tvShow) {
      return genre;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "Simpsons"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, " "), undefined);

