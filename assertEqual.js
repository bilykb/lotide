// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDE00\uD83D\uDE00\uD83D\uDE00 " + "Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("\u274C\u274c\u274c " + "Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);