// In this series, there have been a lot of techniques that involve callback functions. They are way of telling your code, when this function is done, do this.

// Promises do this as well. But you should think of a promise as a "contract" of sorts. With a promise, you're assuming that something will be ready in the future via some function.

// But why use one? Well in a real-world application, creating functions to render your content could lead to a smoother User experience. Rather than having content trickle in randomly, you could have it all come it at once when it's ready or only load content when certain conditions are met. Maybe you only want to show images when a user scrolls to some gallery section. Or you want to wait until an api call is finished before doing something. 

// Basic Promise example
import loadImage from './load-image'

let addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.allSettled([ // This method is useful here because we have a bunch of promises that we want to execute and wait for. The all() method is part of the "Promise API" and is a way to turn all of the promise we want to create into a single promise that will execute them all at the same time (in parallel) rather than calling them one after another (sequentially). 
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach((result, index) => {
    // need something to happen when status is "fulfilled"
    // need something to happen when status is "rejected"
    // Use result.status to set the src via addImg
    if (result.status === "fulfilled"){
        addImg(result.value.src) // Promise.allSettled provides the result structure that would indicate that you would use result.value - Console logging this would reveal it but just try to remember this.
    } else {
        console.log(`Image ${index} failed: `, result.reason) // Promise.allSettled provides the result structure that would indicate that you would use result.reason - Console logging this would reveal it but just try to remember this.
    }
  })
}).catch((error) => {
  console.log('This is the msg variable defined in the construction of your loadImage promise: ', error);
})

// Think about this: Currently, if one image errors out, none of the images load. How could this be improved to show the images that had sucessful promises?

//Answer: switching Promise.all() to Promise.allSettled() and enhancing the logic for what should happen in the .then()