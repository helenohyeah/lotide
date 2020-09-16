// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// takes in an object and a value
// scan the object and return the first key which contains the given value
// if no key with that given value is found, then it should return undefined.
const findKeyByValue = function(obj, value) {
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === value) return key;
  }
  return undefined;
};



// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  horror: "",
  reality: "The Bachelor",
  romance: "The Bachelor"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "horror");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Bachelor "), "reality"); // fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Bachelor"), "reality"); // pass