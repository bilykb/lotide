const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")

assertArraysEqual(middle([10]), []); // => []
assertArraysEqual(middle([10, 20]), []); // => []
assertArraysEqual(middle([10, 20, 30]), [20]); // => [20]
assertArraysEqual(middle([10, 20, 30, 40, 50]), [30]); // => [30]
assertArraysEqual(middle([10, 20, 30, 40]), [20, 30]); // => [20, 30]
assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]); // [30, 40]