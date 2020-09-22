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