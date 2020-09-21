const assertEqual = require('./assertEqual.js');

const head = function(array) {
  return ((array !== undefined) ? array[0] : undefined);
};

module.exports = head;