

// Currying is a way to transform a function that accepts multiple arguments into a new form it of itself that can be called with a new syntax.

// curriedFunction(a,b,c) can now also be called as curriedFunction(a)(b)(c) as well once it has been transformed.

// Start with a function:
function log(date, reason, message) {
    return `[${date.getHours()}: ${date.getMinutes()}] [${reason}] ${message}`
}


// Three important things to note about this:

// 1. The act of currying a function is a separate step. Functions aren't just in a curried state by default. You would either create a function that does the currying tranformation or import the _.curry() method from the lodash library to return a curried version of whatever function you give this method as an argument.
import _ from 'lodash-es'
let curriedLog = _.curry(log);

// 2. The concept of currying is taking advantage of Javascript Closures to remember the variables in a function's outer scope.
// Without using the method from lodash, currying looks like this:
function curry(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                return f(a,b,c);
            };
        };
    };
};
let manuallyCurriedLog = curry(log);
// This version can only be called with curry syntax though.

//These will all return the same thing:
console.log('curriedLog - Regular syntax:', curriedLog(new Date(), 'DEBUG', 'This is a debugger statement'));

console.log('curriedLog - Curry syntax:', curriedLog(new Date()) ('DEBUG') ('This is a debugger statement'));

console.log('manuallyCurriedLog - Curry syntax:', manuallyCurriedLog(new Date()) ('DEBUG') ('This is a debugger statement'));


// 3. The curried version of your function can now be utilized collection of "function partials". 
// Consider curriedFunction(a)(b)(c):
// curriedFunction(a) is saved to a variable. This is a partial function
let logNow = curriedLog(new Date());

console.log(logNow('INFO') ('The first argument was fixed as logNow'))

// You may go even further in this scenario and combine curriedFunction(a)(b) into a single function

let debugNow = logNow('DEBUG');
console.log(debugNow('The first two arguments are fixed as debugNow'))

// Essentially, you can assign parts of the curried function to variables and call that partial function with the additional curry function arguments
// curriedFunction(a)(b)(c)
