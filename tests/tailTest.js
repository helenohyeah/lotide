const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it('returns ["Hi", "How are you"] given ["Hello", "Hi", "How are you"]', () => {
    assert.deepEqual(tail(["Hello", "Hi", "How are you"]), ["Hi", "How are you"]);
  });
  
  it('returns [2, "one", "two"] given [1, 2, "one", "two"]', () => {
    assert.deepEqual(tail([1, 2, "one", "two"]), [2, "one", "two"]);
  });

  it('returns [] given [5]', () => {
    assert.deepEqual(tail([5]), []);
  });

  it('returns [] given []', () => {
    assert.deepEqual(tail([]), []);
  });
});