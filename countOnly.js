/**
 * a function which tallies how many times specific elements occur within an array
 * @param {array} allItems an array of strings that we need to look through
 * @param {object} itemstoCount an object specifying what to count
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;