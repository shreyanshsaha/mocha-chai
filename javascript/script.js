

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

module.exports.isEven = isEven;
module.exports.asyncIsEven = asyncIsEven;
module.exports.promiseIsEven = promiseIsEven;