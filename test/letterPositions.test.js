const assert = require("chai").assert;
const letterPositions = require("../LetterPositions");

describe("#letterPositions", () => {
  it('should return an object with each letter position (ignoring spaces) for "hello world"', () => {

    assert.deepEqual(letterPositions("hello world"), {
      h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3, 9 ],
      o: [ 4, 7 ],
      w: [ 6 ],
      r: [ 8 ],
      d: [ 10 ]
    });
  });
  it('returns an object for a string with excessive white space', () => {

    assert.deepEqual(letterPositions("   hello world   "), {
      h: [ 0 ],
      e: [ 1 ],
      l: [ 2, 3, 9 ],
      o: [ 4, 7 ],
      w: [ 6 ],
      r: [ 8 ],
      d: [ 10 ]
    });
  });
  it('returns an object with separate entries for capitalizations and lowercase', () => {

    assert.deepEqual(letterPositions("Happy Harbour Comics"), {
      H: [ 0, 6 ],
      a: [ 1, 7 ],
      p: [ 2, 3 ],
      y: [ 4 ],
      r: [ 8, 12 ],
      b: [ 9 ],
      o: [ 10, 15 ],
      u: [ 11 ],
      C: [ 14 ],
      m: [ 16 ],
      i: [ 17 ],
      c: [ 18 ],
      s: [ 19 ]
    });
  });
  it('returns an array of indexes when requesting one character', () => {

    assert.deepEqual(letterPositions("hello world").o, [4, 7]);
  });
  it('returns an array when using symbols', () => {

    assert.deepEqual(letterPositions("!!!!")["!"], [0, 1, 2, 3]);
  });
  it('should return an empty object if provided an empty string', () => {

    assert.deepEqual(letterPositions(""), {});
  });
  it('should throw an error if input is not a string', () => {
    const possibleInput = 6;
    const expectedOutput = Error;

    assert.throw(() => {
      letterPositions(possibleInput);
    }, expectedOutput);
  });
});