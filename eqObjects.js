const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
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
    // check if values are equal for the same key
    if (object1[key] !== object2[key]) return false;
  }
  return true;
};


// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true)

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false)