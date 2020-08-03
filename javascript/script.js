/**
 * Javascript tesing using Chai
 * ----------------------------
 * 
 * Following code contains functions, functions 
 * with callbacks and promises. All of them have the
 * same functionality i.e tell is a number is even or odd.
 * 
 * We will test these functions in test/testUsingAssert.js
 * 
 * To setup: npm install
 * To execute: npm test
 * 
 * @author Shreyansh Saha
 */



// Normal Function
function isEven(number){
  return number%2==0;
}

// Function with callback
function asyncIsEven(number, callback){
  setTimeout(callback(number%2==0), 1000);
}

// Function with promise
function promiseIsEven(number){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(number%2==0);
    }, 1000);
  })
}

// Export the functions
module.exports.isEven = isEven;
module.exports.asyncIsEven = asyncIsEven;
module.exports.promiseIsEven = promiseIsEven;