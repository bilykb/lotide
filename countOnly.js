/**
 * a function which tallies how many times specific elements occur within an array
 * @param {array} allItems an array of strings that we need to look through
 * @param {object} itemstoCount an object specifying what to count
 * @returns {object} 
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  if (!Array.isArray(allItems)) {
    throw new Error("Error Will Robinson!")
  }
  if (typeof itemsToCount !== "object" || typeof itemsToCount === null) {
    throw new Error("Error Will Robinson!");
  }

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