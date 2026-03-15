// I was loosely familiar with recursion before starting this but I have never needed to use it in the SFCC web development work i'd done over the last four years.

// Recursion is when a function calls itself until a condition fails to be met. Each function call is added to the stack and waiting for the next function to move on to it's next line to excute. When the condition fails, the function returns which will cause all of the precreding functions that were called to move on to their next lines and return their outputs all in a row.

let countDownFrom = (num) => {
    if (num >= 0) {
        console.log(num) // Since we are counting down, we want to show the number at it's highest value before we reduce it's value by 1 in the recursive call.
        countDownFrom(num - 1)
    }
    return num
}
// countDownFrom(10)


// Use recursion to output these categories in a hierarchical structure

let categories = [
    { id: 'animals', parent: null },
    { id: 'mammals', parent: 'animals' },
    { id: 'cats', parent: 'mammals' },
    { id: 'dogs', parent: 'mammals' },
    { id: 'chihuahua', parent: 'dogs' },
    { id: 'labrador', parent: 'dogs' },
    { id: 'persian', parent: 'cats' },
    { id: 'siamese', parent: 'cats' }
];

// returning an object
// searching through an array
// need array methods
// - need filter to grab all parents
// - need forEach to create an object for each parent 
// parent values will be keys on a new object
// Recursive call ends when all objects in the array have been looked through
// Use the length of the array as the fail condition

let sortCategories = (categories, parent) => {
    let node = {};
    
    categories
    .filter(x => x.parent === parent)
    .forEach(x => node[x.id] = sortCategories(categories, x.id)) // The new property is created on the node object and the the thing that is returned by the recursive call will be it's value. In this case, the next node is what will be assigned!
    // Recursion will end when .filter returns an empty array. In this case it will look for parents with a value of Chihuahua, labrador, persian, and siamese. IT will see that there are none, the foEach will do nothing, and the recursion will end.
    
    return node
}

console.log(JSON.stringify(sortCategories(categories, null), null, 2))
// End Goal:
// {
//     animals: {
//         mammals: {
//             dogs: {
//                 chihuahua: null
//                 labrador: null
//             }
//             cats: {
//                 siamese: null
//                 persian: null
//             }
//         }
//     }
// }