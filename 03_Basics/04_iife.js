// An IIFE (Immediately Invoked Function Expression) 

// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

// syntax for IIFE
(function () {
    // …
  })();
  
  (() => {
    // …
  })();
  
  (async () => {
    // …
  })();


  //   ========================================

  // Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // this is named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // this is simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')