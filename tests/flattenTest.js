const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it('returns [1, 2, 3, 4, 5, 6] given [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  
  it('returns ["hi", "bye"] given ["hi", "", ["bye"]]', () => {
    assert.deepEqual(flatten(["hi", "", ["bye"]]), ["hi", "bye"]);
  });

  it('returns [1, 2, 3] given [1, 2, 3]', () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });
});