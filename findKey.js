// scan the object and return the first key for which the callback returns a truthy value
// if no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) return item;
  }
  return undefined;
};

module.exports = findKey;