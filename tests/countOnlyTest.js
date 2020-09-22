const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it('returns counts for a subset of names given a list and the subset to care about', () => {
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
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { Fang: 2, Jason: 1 });
  });
  
  it('returns counts for a subset of number given a list and the subset to care about', () => {
    const numbers = [1, 2, 2, 3, 3, 3, 4];
    assert.deepEqual(countOnly(numbers, { 1: false, 2: true, 3: true}), {2: 2, 3: 3});
  });

  it('returns {} given a list and a subset to care with nothing in common with the list', () => {
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
    assert.deepEqual(countOnly(firstNames, {"Claire": true, "Jason": false}), {});
  });

  it('returns {} given a list and no subset', () => {
    const numbers = [1, 2, 3, 4];
    assert.deepEqual(countOnly(numbers, {}), {});
  });
});