const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💚 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!(eqObjects(actual, expected))) {
    console.log(`⚠️ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(array1, array2) {
  // check if array lengths are equal => return false
  if (array1.length !== array2.length) return false;
  // compare the values at each index
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // check if any value does't match => return false
      return false;
    } else {
      continue;
    }
  }
  // if the loop completes then the arrays must match
  return true;
};

// Returns true if both objects have identical keys with identical values. Else returns false
const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  // check if they have the same number of keys
  if (objKeys1.length !== objKeys2.length) return false;
  // loop through one object
  for (let i = 0; i < objKeys1.length; i++) {
    let key = objKeys1[i];
    // if either value is an array, use the eqArrays function
    if (Array.isArray(object1[key]) ||  Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) return false;
    } else {
      // otherwise compare the primitive values
      if (object1[key] !== object2[key]) return false;
    }
  }
  // if the loop completes then the objects must match
  return true;
};


// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2" }); // pass

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }); // fail

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }); // pass

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] }); // fail

const cd3 = { c: ["2", 3], d: "1"};
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: ["2", 3], d: "1"}); // fail