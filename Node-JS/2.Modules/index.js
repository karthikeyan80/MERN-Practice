// Importing the 'math' module using require. This allows us to use the functions defined in 'math.js'.
const math = require("./math");

// File: index.js (Main File)

// Using the 'add' function from the 'math' module to calculate the sum of two numbers.
const sum = math.add(5, 3);

// Using the 'subtract' function from the 'math' module to calculate the difference of two numbers.
const difference = math.subtract(5, 10);

// Logging the results to the console.
console.log(`Sum: ${sum}`);
console.log(`Difference: ${difference}`);
