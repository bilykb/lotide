
const assert = require('chai').assert;
const tail = require("../tail")

describe('#tail', () => {
  it('should return result[0] as "Lighhouse"', () => {
    const result = ['Hello', 'Lighthouse', 'Labs'];

    assert.deepEqual(tail(result), ['Lighthouse', 'Labs']);
  })
})



// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");