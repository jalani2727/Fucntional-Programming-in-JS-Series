// My understanding of functors after watch "#10 and #11" of hhis Functional Programming series


// Functors are types of functions that accept a value and a map method in order to execute some logic. This is a useful concept because there may be cases in which there is a lot of unneccessary logic found in a particular function you've created and you want to separate come concerns.

// The goal of using a functor is to return some new object of the same type that contains transformed values without altering the orginal.

// A Promise is also a functor for this reason. The .then() method that you call on your promise acts as the .map() in that it takes your promise or array of promises, applies a function to the future result (data).