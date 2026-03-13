function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();


function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // closure is created here where x will be 5
const add10 = makeAdder(10); // closure is created here where x will be 10

// When makeAdder is called, it returns something. What does it return? Line 14 says it will return a function that accepted a parameter that will be added to x.

// These are the takeways here:
// 1. add5 is now the returned value of makeAdder(5). It is now a reference to a function, loaded up and ready for execution.
// 2. add10 is now the returned value of makeAdder(10). It is now a reference to a function, loaded up and ready for execution.
// 3. When either add5 or add 10 are finally called, they are actually executing the function they are referencing. This function "closes over" what x was supposed to be when add5 and add10 were created and had their values become a reference to an anonymous function that is destined to be executed.


console.log(add5(2)); // 7
console.log(add10(2)); // 12