/**
  * a function an searches for a key on an object where its value matches a given value
 * @param {object} objectOfGenres an object with a list of best shows by genre
 * @param {string} tvShow a string of a television show name
 * @return {keyof Object}
 */

const findKeyByValue = function(objectOfGenres, tvShow) {
  
  for (const genre in objectOfGenres) {
    if (objectOfGenres[genre].toLowerCase() === tvShow.toLowerCase()) {
      return genre;
    }
  }
};

module.exports = findKeyByValue;