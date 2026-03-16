// Here is a function that contains logic that will be returned as a Promise. 
// The logic inside is what is executed each time your promise object is called in your code

// The <new Promise()> syntax is how you construct your promise. Constructing a promise in this way turns your logic into a promise object that has access to promise methods and also gives it some internal properties called the state and the result which can't be directly accessed.

// Your logic will contain a pathway to use the resolve method or to use the reject method. In this example, we reach the resolve method if the image loads successfully and reject if there is an error.

// The "state" property of your promise will update to "fulfilled" if the onload event is triggered - aka the image loads successfully. It  will update to "rejected" if the onerror event is triggered - aka there is some error with the image. 

// If you never call resolve or reject, the promise status will never update from "pending" and will not proceed, leaving your program hanging.

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()

    image.onload = function() {
      resolve(image)
    }

    image.onerror = function() {
      let msg =
        'Could not load image at ' + url
      reject(new Error(msg))
    }

    image.src = url // This promise is a "container" for this value. This value is the data you will use in the future.

  })
}
export default loadImage

// Outiside of this construction of your promise, you'll actually call this function to create your Promise object and use it in your program. 
// When you call it, you will attached your "consumer methods" to consume the result of your promise.
// .then() will accept a callback function that will run if the state of your promise is fulfilled - AKA your logic to call resolve() was hit.
// .catch() will accept a callback function that will run if the state of your promise is rejected - AKA your logic to call reject() was hit.

// Optionally, you can call finally on your promise to clean up anything that you may want to stop. Like stopping a loading icon or something.