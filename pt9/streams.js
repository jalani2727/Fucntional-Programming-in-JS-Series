// A stream is a concept.

// Its how you would describe some model that processes data over a period rather than all at once

// Example:

const numberStream = {
    each: (callback) => {
        setTimeout(() => callback(1), 1000);
        setTimeout(() => callback(2), 2000);
        setTimeout(() => callback(3), 3000);
    }
}

// numberStream.each(console.log);


// The callbacks (console.log function in this case) will excute sequentially over 6 seconds.

// Lazy-loading images is a concept that I have seen implemented on eCommerce sites. This is a stream. 
// The data (images) are processed as they are made available, instead of requiring all images for the product to be ready before showing anything at all.

// In the context of functional programming, this is called "lazy evaluation"

// Another real life situation where streams are useful would be when you have a fuckton of data that needs to be processed but all of it can't fit in memory at once.

import fs from 'fs'; // This is the Node.js File System core module that provides methods for interacting with your computer's file system.

import highland from 'highland';

highland(fs.createReadStream('data/customers.csv', 'utf8')) // The csv is "stream-i-fied" here by createReadStream. When you run the program all of the proceeding logic to process the data will run once per streamed item from the .csv.

// Highland is used here because it adds methods to the stream like .split(), .map() and .filter().
.split() // splits the string on /n
.map(line => line.split(',')) // create array in which the values are the result of the split
.map(info => ({
    name: info[0],
    value: info[1]
})) // create a new object for each customer
.filter(customer => customer.value > 2) // Only show customers with a value attribute over 2
.map(customer => customer.name) // transform the result of the filter into an array
.each(x => console.log('each: ', x, typeof(x))) // show end result in console.