const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!(eqObjects(actual, expected))) {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// TEST CODE
// assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }); // pass
// assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // fail
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // pass
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // fail
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: ["2", 3], d: "1"}); // fail