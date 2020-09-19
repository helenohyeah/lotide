// const assertEqual = require('./assertEqual.js');
const eqArrays = require('./eqArrays.js');

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

module.exports = eqObjects;

// TEST CODE
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