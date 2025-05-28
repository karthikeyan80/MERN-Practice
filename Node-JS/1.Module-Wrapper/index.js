// To understand the Module Wrapper in Node.js, let's log the arguments passed to the wrapper function.

console.log("Module Wrapper Function Arguments:");
console.log(arguments);

// Explanation:
// Node.js wraps every module with a function like this:
// (function(exports, require, module, __filename, __dirname) {
//   // Your module code actually lives here
// });
//
// The `arguments` object contains these wrapper function arguments:
// - exports: A reference to `module.exports`
// - require: The function to import other modules
// - module: The current module object
// - __filename: The full path of the current file
// - __dirname: The directory name of the current file