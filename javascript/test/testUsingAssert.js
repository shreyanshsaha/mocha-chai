// https://devhints.io/chai

// https://www.npmjs.com/package/chai
const chai = require('chai');
const assert = chai.assert;

// https://www.npmjs.com/package/chai-as-promised
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).assert;

const script = require("../script");

// ==============
// ! Using assert
// ==============


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
  
});


// Callbacks
it('Should return true if number is even', function(done){
  script.asyncIsEven(10, (result)=>{
    assert.equal(result, true);
    done();
  })
});


// Promises
it('Should return true if number is even', function(){
  assert.becomes(script.promiseIsEven(10), true);
  // assert.eventually.equal(script.promiseIsEven(10), true);
});


// Execute using `npm test`