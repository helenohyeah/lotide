// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`⚠️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return ((array !== undefined) ? array[0] : undefined);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5]), 5);
assertEqual(head(["Boo"]), "Boo");
assertEqual(head([4, 5]), 5);
assertEqual(head(), undefined);