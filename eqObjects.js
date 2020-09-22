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

module.exports = eqObjects;