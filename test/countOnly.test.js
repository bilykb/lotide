const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("when given the name 'Jason', a name that you are looking for, it should return 1", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });

    assert.equal(results['Jason'], 1);
  });
  it("when given the name 'Karima,' a name that you are not looking for, it should return undefined", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.isUndefined(results['Karima'], undefined);
  });
  it("when given the name 'Brett', a name that you are looking for but not part of the array you are searching, it returns undefined", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.isUndefined(results['Brett'], undefined);
  });
  it('when given the name "Fang", a name you are looking for, it should return 2', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const results = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    });
    assert.equal(results['Fang'], 2);
  });
});