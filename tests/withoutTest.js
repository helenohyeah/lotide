const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it('returns an array without the value given a value to remove', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns an array without the values given an array of values', () => {
    assert.deepEqual(without([1, 2, 2, 3], [1, 2]), [3]);
  });
  
  it('returns a matching array given an array of values that are not in the array', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, 3]), ["1", "2", "3"]);
  });

  it('returns a matching array given an empty array of values to remove', () => {
    assert.deepEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);
  });
});