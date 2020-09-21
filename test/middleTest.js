const assertArraysEqual = require('../assertArraysEqual');
const middle = require ('../middle');

assertArraysEqual(middle([1]), []); // pass
assertArraysEqual(middle([1, 2]), []); // pass
assertArraysEqual(middle([1, 2, 3]), [2]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // pass