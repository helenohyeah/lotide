const assertEqual = require('../assertEqual');
const head = require('../head');


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head([5]), 5);
assertEqual(head(["Boo"]), "Boo");
assertEqual(head(), undefined);