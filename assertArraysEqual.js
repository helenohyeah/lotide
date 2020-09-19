const eqArrays = require('./eqArrays.js')

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (!(eqArrays(actual, expected))) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // pass
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // pass
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // fail
// assertArraysEqual(["1", "2", "3"], ["1", "2", "3", 4]); // fail
// assertArraysEqual(["1", "2", "3", "4"], ["1", "2"]); // fail
// assertArraysEqual(["1"], ["1", "2"]); // fail
// assertArraysEqual(["1", "2"], ["1"]); // fail