const assertObjectsEqual = require('../assertObjectsEqual.js');

assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }); // pass
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // pass
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // fail
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // fail