const assertEqual = require('./assertEqual.js');

const tail = function(array) {
  return array.slice(1);
};

module.exports = tail;