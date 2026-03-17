// A monad is a type of functor, a container object that has the ability to map a new version of the container object.

// Monads are containers that have the implement a "Flat Map".

// Considering Streams:
// Streams are functors so they return Streams. They return containers of data. If you were to map a stream where your callback console logs the Stream you would see the Stream Container around the data instead of the data inside of the Stream.
// This is where "Flat Map" is useful. Flat map goes one level deeper as a means of navigating this nested structure.

// Flat Map:
// This will map your container object and "flatten" it so that it returns the value(s) contained with it.
// Calling Stream.flatMap((itemInStream) => doSomething(itemInStream)) allows you to perform logic with the item in the stream instead of the container (the stream itself).
// Streams are considered monads!

// Without flatMap (creates nested containers)
stream.map(x => getAnotherStream(x))  // → Stream<Stream<value>> 😱

// With flatMap (flattens automatically)  
stream.flatMap(x => getAnotherStream(x)) // → Stream<value> ✅

// Promise.then():
// Promises are also considered monads! .then() is also a Flat Map style of a map method. How? The callback that you would pass to .then() needs a VALUE, right? How does it get that value? 
// .then() is called on a Promise and also returns a promise. BUT ALSO, the promise that it returns is flattened so that the value inside of the promise can be accessed by the callback function you use. The callback function can't run on a promise, it needs a value.