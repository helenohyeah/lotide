const assertEqual = require('./assertEqual.js');
const findKey = require('./findKey.js');

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

module.exports = findKeyByValue;

// // TEST CODE
// const bestTVShowsByGenre = {
//   scifi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
//   horror: "",
//   reality: "The Bachelor",
//   romance: "The Bachelor"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "horror");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Bachelor "), "reality"); // fail
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Bachelor"), "reality"); // pass