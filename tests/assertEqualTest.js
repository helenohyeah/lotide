const assertEqual = require('../assertEqual');

assertEqual(10, 10); // pass
assertEqual("Hello", "Hello"); // pass
assertEqual(20, ""); // fail
assertEqual("Hello", 10); // fail