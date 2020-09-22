// return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value
const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else if (callback(item)) return result;
  }
  return result;
};

module.exports = takeUntil;