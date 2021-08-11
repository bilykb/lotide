const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it('should return true when comparing { a : "1", b : "2" } to { a : "1", b : "2" }', () => {

    assert.deepEqual(eqObjects({ a : "1", b : "2" }, { a : "1", b : "2" }), true);
  });
  it('should return false when comparing { x : "3", y : "4" } and { y : "5", x : "1" }', () => {
   
    assert.deepEqual(eqObjects({ x : "3", y : "4" }, { y : "5", x : "1" }), false);
  });
  it('should return false when comparing { x : "3", y : "4" } and { z : "3", x : "4" }', () => {

    assert.deepEqual(eqObjects({ x : "3", y : "4" }, { z : "3", x : "4" }), false);
  });
  it('should return true when comparing { c : "1", d : ["2", 3] } and { d : ["2", 3], c : "1" }', () => {

    assert.deepEqual(eqObjects({ c : "1", d : ["2", 3] }, { d : ["2", 3], c : "1" }), true);
  });
  it('should return false when comparing { a : "1", b : "2" } and { a : "1", b : "2", c : "3" }', () => {
    
    assert.deepEqual(eqObjects({ a : "1", b : "2" }, { a : "1", b : "2", c : "3" }), false);
  });
  it('should return false when comparing { c : "1", d : ["2", 3] } and { c : "1", d : ["2", 3, 4] }', () => {

    assert.deepEqual(eqObjects({ c : "1", d : ["2", 3] }, { c : "1", d : ["2", 3, 4] }), false);
  });
  it('should return false when comparing { a : "1", e : ["2", 3, 4] } and { c : "1", d : ["2", 3, 4] }', () => {

    assert.deepEqual(eqObjects({ a : "1", e : ["2", 3, 4] }, { c : "1", d : ["2", 3, 4] }), false);
  });
  it('should return true when comparing { c : "1", d : ["2", 3, 4] } and { d : ["2", 3, 4], c : "1"  }', () => {

    assert.deepEqual(eqObjects({ c : "1", d : ["2", 3, 4] }, { d : ["2", 3, 4], c : "1"  }), true);
  });
  it('should return true when comparing {} and {}', () => {

    assert.deepEqual(eqObjects({}, {}), true);
  });
});