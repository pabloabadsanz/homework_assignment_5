/*
 * Test runner
 *
 */

// Test runner's application logic
_appTestRunner = {};

// Container for all the tests
_appTestRunner.tests = {};

// Add the unit tests to the runner
_appTestRunner.tests.uniTests = require('./unitTests');

// Count all the tests
_appTestRunner.countTests = function() {
  var counter = 0;
  for (var key in _appTestRunner.tests) {
    if (_appTestRunner.tests.hasOwnProperty(key)) {
      var subTests = _appTestRunner.tests[key];
      for (var testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          counter++;
        }
      }
    }
  }

  return counter;
};

_appTestRunner.produceTestReport = function(limit, succeses, errors) {
  console.log("");
  console.log("-------------- BEGIN TEST REPORT --------------");
  console.log("");
  console.log("Total tests: ", limit);
  console.log("Passed: ", succeses);
  console.log("Fails: ", errors.length);
  console.log("");

  // If there are errors, print them in detail
  if (errors.length > 0) {
    console.log("");
    console.log("-------------- BEGIN ERROR DETAILS --------------");
    console.log("");
    errors.forEach(function(testError) {
      console.log('\x1b[31m%s\x1b[0m', testError.name);
      console.log(testError.error);
      console.log("");
    });
    console.log("-------------- END ERROR DETAILS --------------");
    console.log("");
  }

  console.log("");
  console.log("-------------- END TEST REPORT --------------");
  process.exit(0);
};

// Runs all the tests collecting all the errors and successes
_appTestRunner.runTests = function() {
  var errors = [];
  var successes = 0;
  var limit = _appTestRunner.countTests();
  var counter = 0;
  for (var key in _appTestRunner.tests) {
    if (_appTestRunner.tests.hasOwnProperty(key)) {
      var subTests = _appTestRunner.tests[key];
      for (var testName in subTests) {
        if (subTests.hasOwnProperty(testName)) {
          (function() {
            var tmpTestName = testName;
            var testValue = subTests[testName];

            // Call the test
            try {
              testValue(function() {
                // If it calls back without throwing, then it succeeded, so log it in green
                console.log('\x1b[32m%s\x1b[0m', tmpTestName);
                counter++;
                successes++;
                if (counter == limit) {
                  _appTestRunner.produceTestReport(limit, successes, errors);
                }
              });
            } catch(e) {
              // If it throws then it failed. Capture the error and log it in red
              errors.push({
                'name': tmpTestName,
                'error': e
              });
              console.log('\x1b[31m%s\x1b[0m', tmpTestName);
              counter++;
              if (counter == limit) {
                _appTestRunner.produceTestReport(limit, successes, errors);
              }
            }
          })();
        }
      }
    }
  }
};

// Run a test
_appTestRunner.runTests();
