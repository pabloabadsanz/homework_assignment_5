On this assignment I've built a test runner which reads all the tests exported by the unitTests.js module.

Those tests import the "lib" module where I defined 3 different functions. One which squares a number, another one generating a random string which length equals the passed parameter, and the function which hashes a string as in the previous lectures.

The tests check that the returned types are the expected ones, as well as when a value is passed to the functions, the expected returned value is the right one.
Also, when a wrong parameter is passed to those functions, I assert that the returned value is the expected one, not crashing the application.
