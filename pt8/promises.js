// In this series, there have been a lot of techniques that involve callback functions.

// They are way of telling your code, when this function is done, do this.

// Promises do this as well. But you should think of a promise as a "contract" of sorts. With a promise, you're assuming that something will be ready in the future via some function

// Basic Promise example
import loadImage from './load-image'

let addImg = (src) => {
  let imgElement =
    document.createElement("img")
  imgElement.src = src
  document.body.appendChild(imgElement)
}

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg'),
  loadImage('images/cat4.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src))
}).catch((error) => {
  // handle error later
})