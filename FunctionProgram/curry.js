//currying:Currying doesn’t call a function


//Program1


function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log( curriedSum(1)(2) ); // 3



//Program2


function curry(fn) { // curry(fn) does transforms curry
    return function (a) {
      return function (b) {
        return fn(a, b);
      };
    };
  } 
  function sum(a, b) {
    return a + b;
  }
  let currySum = curry(sum);
  console.log(currySum(10)(20)); // 30