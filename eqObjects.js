const eqArrays = require('./eqArrays.js');

// Returns true if both objects have identical keys with identical values. Else returns false
// Handles nested objects and nested arrays
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  let keys = Object.keys(object1);
  for (let key of keys) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) { // array case
      return eqArrays(object1[key], object2[key]);
    } else if (typeof object1[key] === 'object' || typeof object2[key] === 'object') {   // recursive case
      return eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) { // base case
      return false;
    }
  }
  return true;
};

// TEST CODE
// const assertEqual = require('./assertEqual.js');

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// const cd3 = { c: ["2", 3], d: "1"};
// assertEqual(eqObjects(cd, cd3), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
// assertEqual(eqObjects({ a: { z: 1 }, b: { c: { d: 2 }}}, { a: { z: 1 }, b: { c: { d: 2 }}}), true); // => true
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false


module.exports = eqObjects;