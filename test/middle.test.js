const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it('should return an empty array if an array has >= 2 length', () =>{
    const array = [];

    assert.deepEqual(middle(array), [])
  })
  it('should return an empty array if the array has a length of 2', () => {
    const array = [10, 20];
  
    assert.deepEqual(middle(array), []);
  });
  it('should return [20] for the array [10, 20, 30]', () => {
    const array = [10, 20, 30];

    assert.deepEqual(middle(array), [20]);
  });
  it('should return [30] for the array [10, 20, 30, 40, 50]', () => {
    const array = [10, 20, 30, 40, 50];

    assert.deepEqual(middle(array), [30])
  })
});



// assertArraysEqual(middle([10, 20, 30]), [20]); // => [20]
// assertArraysEqual(middle([10, 20, 30, 40, 50]), [30]); // => [30]
// assertArraysEqual(middle([10, 20, 30, 40]), [20, 30]); // => [20, 30]
// assertArraysEqual(middle([10, 20, 30, 40, 50, 60]), [30, 40]); // [30, 40]