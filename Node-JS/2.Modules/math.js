// File: math.js (Module)

// Function to add two numbers.
function add(a, b) {
  return a + b;
}

// Function to subtract the second number from the first number.
function subtract(a, b) {
  return a - b;
}

// Exporting the functions as a module so they can be used in other files.
module.exports = { add, subtract };
