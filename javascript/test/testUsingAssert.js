/**
 * Javascript Test Script
 * ----------------------
 * 
 * This code tests the functions defined
 * in `script.js`. Currently all test syntax 
 * use assert. In future I'll add should and
 * expect syntax as well.
 * 
 * Links to refer:
 * @link https://devhints.io/chai
 * @link https://www.npmjs.com/package/chai
 * @link https://www.npmjs.com/package/chai-as-promised
 * 
 * @author Shreyansh Saha
 */


// Imports
const chai = require('chai');
const assert = chai.assert;
const chaiAsPromised = require('chai-as-promised');

// Using assert for promises
chai.use(chaiAsPromised).assert;

// Importing the functions
const script = require("../script");

// ==================
// Note: Using assert
// ==================

// Hooks
beforeEach('Execute before', function(){
  console.log("This will be executed before each test.");
})

afterEach('Execute after', function(){
  console.log("This will be executed after each test.");
})

// Functions
it('Should return true if number is even', function(){
  let result = script.isEven(10);
  assert.equal(result, true);
});

it('Should return false if number is odd', function(){
  let result = script.isEven(9);
  assert.equal(result, false);
});


// Callbacks
it('Should return true if number is even', function(done){
  script.asyncIsEven(10, (result)=>{
    assert.equal(result, true);
    // we need to call done so mocha-chai knows that 
    // the callback is completed
    done();
  })
});


// Promises
it('Should return true if number is even', function(){
  assert.becomes(script.promiseIsEven(10), true);
  // another way to use assert with promise
  assert.eventually.equal(script.promiseIsEven(10), true);
});


// Execute using `npm test`