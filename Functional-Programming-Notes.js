"use strict";
import fs from 'fs'
import './pt8/promises'


// let animals = [
//     { name: 'Zero', species: 'gremlin' },
//     { name: 'Son', species: 'cat' },
//     { name: 'Link', species: 'cat' },
//     { name: 'Gizmo', species: 'gremlin' },
// ];
// let checkIfGremlin = (animal) => animal.species === 'gremlin';
// let gremlins = animals.filter(checkIfGremlin);
// let descriptions = animals.map((animal) => animal.name + ' is a ' + animal.species);
// console.log(gremlins);
// console.log(descriptions);



// let orders = [
//     { amount: 250 },
//     { amount: 350 },
//     { amount: 530 },
//     { amount: 4250 },
// ];
// let orderTotal = orders.reduce((sum, currentOrder) => sum += currentOrder.amount, 0);
// console.log(orderTotal);


var output = fs.readFileSync('pt4/data.txt', 'utf8')
	.trim()
	.split('\r\n')
	.map((line) => line.split('\t'))
	.reduce((customers, line) => {
		const customerName = line[0];
		if (!customers[customerName]) {
			customers[customerName] = []
		}
		customers[customerName].push({
			itemName: line[1],
			price: line[2],
			quantity: line[3]
		});
		return customers
	}, {})

console.log('output:', JSON.stringify(output, null, 2))

// {
//     "mark johansson": [
//         { name: "Chef's Knife", price: 89.99, quantity: 2 },
//         { name: "Cutting Board", price: 34.50, quantity: 3 },
//         { name: "Non-stick Pan", price: 45.00, quantity: 4 },
//         { name: "Mixing Bowls", price: 28.75, quantity: 1 },
//         { name: "Measuring Cups", price: 15.99, quantity: 2 }
//     ],
//     "Nikita Smith": [
//         { name: "Stand Mixer", price: 299.99, quantity: 1 },
//         { name: "Blender", price: 125.00, quantity: 2 },
//         { name: "Food Processor", price: 179.99, quantity: 1 },
//         { name: "Kitchen Scale", price: 32.99, quantity: 3 },
//         { name: "Silicone Spatulas", price: 12.50, quantity: 5 }
//     ]
// };
