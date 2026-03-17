// My understanding of functors after watch "#10 and #11" of hhis Functional Programming series


// Functors are containers that accept values of any type and have a map method in order to execute some logic and return a different object of the same type that has undergone some transformation.

// The goal of using a functor is to return some new object of the same type that contains transformed values without altering the orginal.

// An array is a functor for this reason.

// A Promise is also a functor for this reason. The .then() method that you call on your promise acts as the .map() in that it takes your promise or array of promises, applies a  function to the future result (data), and returns a new promise with new data inside of it.