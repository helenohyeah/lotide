const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it(`returns 1 for [ 1, 2, 3 ]`, () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });
  
  it (`returns 5 for [5]`, () => {
    assert.strictEqual(head([5]), 5);
  });

  it (`returns "Hello" for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it (`returns "Hello" for ["Boo"]`, () => {
    assert.strictEqual(head(["Boo"]), "Boo");
  });

  it (`returns undefined for empty parameter`, () => {
    assert.strictEqual(head(), undefined);
  });
});