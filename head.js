const assertEqual = require('./assertEqual.js');

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