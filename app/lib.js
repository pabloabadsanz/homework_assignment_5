/*
 * Library including the functions to be tested by the test runner
 *
 */

var crypto = require('crypto');

var lib = {};

// Returns the passed number times the passed number
lib.getSquaredNumber = function(num) {
  try {
    return num * num;
  } catch(e) {
    throw('Not a valid parameter');
  }
};

// Creates a string of random alphanumeric characters, of a given length
lib.createRandomString = function(strLength) {
  strLength = typeof(strLength) == 'number' && strLength > 0 ? strLength : false;
  if (strLength) {
    // Define all the possible characters that could go into a string
    var possibleCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // Start the final string
    var str = '';
    for(i = 1; i <= strLength; i++) {
      // Get a random character from the possibleCharacters string
      var randomChar = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
      // Append this character to the final string
      str += randomChar;
    }

    return str;
  } else {
    return false;
  }
}

// Create a SHA256 hash
lib.hash = function(str, hashingsecret) {
  if (typeof(str) == 'string' && str.length > 0) {
    var hash = crypto.createHmac('sha256', hashingsecret).update(str).digest('hex');
    return hash;
  } else {
    return false;
  }
};

// Export the module
module.exports = lib;
