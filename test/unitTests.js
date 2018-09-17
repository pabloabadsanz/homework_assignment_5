/*
 * Unit tests
 *
 */

 // Dependencies
 var lib = require('./../app/lib');
 var assert = require('assert');

 // Holder for the tests
var tests = {};

// Assert that the square a number function is returning a number, not throwing
tests['lib.getSquaredNumber should return a number'] = function(done) {
  var val = lib.getSquaredNumber(0);
  assert.equal(typeof(val), 'number');
  done();
};

// Assert that the square a number function is returning a false when not a number is passed, throwing
tests['lib.getSquaredNumber should return false when not a number is passed'] = function(done) {
  var val = lib.getSquaredNumber("0");
  assert.equal(val, false);
  done();
};

// Assert that the square a number function is returning the number times the number
tests['lib.getSquaredNumber should return the number squared'] = function(done) {
  var num = 10;
  var val = lib.getSquaredNumber(num);
  assert.equal(val, num * num);
  done();
};

// Assert that the create random string returns a string
tests['lib.createRandomString should return a string when passing a parameter greater than 0'] = function(done) {
  var val = lib.createRandomString(1);
  assert.equal(typeof(val), 'string');
  done();
};

// Assert that the create random string returns false when passing not a number as parameter
tests['lib.createRandomString should return false when passing not a number as parameter'] = function(done) {
  var val = lib.createRandomString("");
  assert.equal(val, false);
  done();
};

// Assert that the create random string returns false when passing 0 as strlen parameter
tests['lib.createRandomString should return false when passing 0 as strlen parameter'] = function(done) {
  var val = lib.createRandomString(0);
  assert.equal(val, false);
  done();
};

// Assert that the hash a string returns string
tests['lib.hash should return a string'] = function(done) {
  var val = lib.hash("abcdefg", "hashingsecret");
  assert.equal(typeof(val), 'string');
  done();
};

// Assert that the hash a string returns false when source string parameter is not valid
tests['lib.hash should return false when source parameter is not valid'] = function(done) {
  var val = lib.hash("", "hashingsecret");
  assert.equal(val, false);
  done();
};

// Assert that the hash a string returns a hashed string different from the source
tests['lib.hash should return a hashed string different from the source one'] = function(done) {
  var src = "abcdefg";
  var val = lib.hash(src, "hashingsecret");
  assert.ok(val !== src);
  done();
};

// Export the tests to the runner
module.exports = tests;
