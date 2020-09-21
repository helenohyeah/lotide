// const assertEqual = require('../assertEqual');
// const head = require('../head');


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
// assertEqual(head([5]), 5);
// assertEqual(head(["Boo"]), "Boo");
// assertEqual(head(), undefined);

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [ 1, 2, 3 ]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});