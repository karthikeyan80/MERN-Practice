//----------------For-in-loop
//The "for..in" loop in JS is used to iterate over thr enumerate properties of an object.
//it is a way to loop through the keys (property names) of an object
//syntax  -  for(let key in object)  {...}
//challenge
/* const obj = { a: 1, b: 2, c: 3 };
for (let i in obj) {
  console.log(`${i} ${obj[i]}`);
} */




//----------for-of-loop
//the "for..of" loop in JS is a modern iteration statement introduced in ECMAScript 6 (ES 6).
//it has easy way to loop over elements like arrays , strings , maps , sets etc,
//it helps to iterate directly over the values of elements , rather than dealing with keys or indices.

/* const test = "Hello";
for (const char of test) {
  console.log(char);
} */

//challenge
/* const a = ["a", "b", "c"];
for (let item of a) {
  console.log(item);
}
 */



//.........for each method
/*syntax - array.forEach((element, index, array) => {
    .....
});
 */

/* const words = ["hello", "bird", "table", "football", "pipe"];

const capwords = words.forEach((w, i, ar) => {
  ar[i] = w[0].toLocaleUpperCase() + w.substring(1);
});
console.log(words);
 */

//challenge
/* let number = [1, 2, 3, 4, 5];
let sum = 0;

function adder(number) {
  sum += number;
}

number.forEach(adder);
console.log(sum);
 */



//...........Map-function-------------
//The map() method creates a new array populated with the results of a calling a provided function on every element in the calling array.
//it doesn't modify original array like foreach() , instead it returns new array

/* let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((num) => num * 2);
console.log(double);
console.log(numbers);
 */

//challenge

/* const array = [2, 3, 5, 7, 8];
new_Array = array.map((a) => a * 10);
console.log(new_Array);
 */




//the filter() method is a built-in-array method in JS that alllows you to  create a new array containing elements that pass a certain condition.
//it provides a clean and concise way to filter out elements from an array based on a specified criteria
/* const songs = [
  { name: "SummerTime sadness", duration: 3.8 },
  { name: "Dark Paradise", duration: 3.2 },
  { name: "Perfect", duration: 2.8 },
  { name: "60 Years Old", duration: 5.8 },
  { name: "Blue", duration: 2.8 },
];

console.log(songs.filter((song) => song.duration > 3));
 */

//challenge
/* const ages = [32, 33, 16, 40];
adult = ages.filter((age) => age > 18);
console.log(adult);
 */

//challenge
/* const words = ["spray", "limit", "elite", "destruction", "present"];

let word = words.filter((w) => w.length > 6);
console.log(word);
 */



//-----------Find () Method----------
//The find method is another built-in array helper in javascript that allows you to find the first element in an array that matches a specific condition .
// it returns the value of the first lement that satisfies the given testing function or undefined if no element is found

//challenge
/* const ages = [3, 10, 18, 20];
console.log(ages.find((age) => age > 18));
 */

//challenge
//REFACTOR

/* let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "Iphones", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const prod = products.find((pro) => pro.category == "Books");
console.log(prod);
 */





/*
The every() and some() method are two built-in array methods in JavaScript that allows you to check the elements
of an array based on a given condition . 
Both mothods take a callback function as an argument , which is applied to each element of the array


The every() method tests whether all elemets in array passs the condition in callback function 
it returns true if callback function return true for every element , otherwise it returns false

The some() method tests whether at least one element in the array passes the condition in callback function.
it returns true if the callback function returns true for atleast one element , otherwise false

*/

/* const peoples = ["alex", "luna", "lana", "rithu"];

const res1 = peoples.every((ep) => ep.length == 4);
const res2 = peoples.some((sp) => sp.length == 4);

console.log(res1);
console.log(res2);
 */

//challenge
//REFACTOR
/* 
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "Iphones", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductBooks = true;
let someProductBooks = false;

result1 = products.every((pro) => pro.category == "Books");
result2 = products.some((pro) => pro.category == "Books");
allProductBooks = result1;
someProductBooksroductBooks = result2;
console.log(result1);
console.log(result2);
 */



//---------------reduce() method----------------------
//The reduce() method applies the reducer function to each element of an array,
// accumulating the result into a single value.
//It is often used to perform calculations or aggregations an array elements
// and specify the array into a single array.
//syntax - reduce(callback_func(previous , current){}, index)
//here we can give any name to prev and current parameters and it changes its value for each iteration
//it returns a new array

/* const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);
 */


//challenge
/* const peoples = [
  { name: "John", age: 18 },
  { name: "John", age: 20 },
  { name: "John", age: 22 },
];

const oldAge = peoples.reduce((c, p) => (c.age > p.age ? c : p), 0);
age = oldAge.age;
console.log(oldAge);
console.log(age); */
//When you don’t give an initial value to reduce(), it automatically starts from the second element and uses the first element as the "starting point".

/* const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];
const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
}, {});
console.log(wordFrequency); */

//challenge
/* const numbers = [2, 2, 2, 2];
const product = numbers.reduce((p, c) => p * c, 1);
console.log(product);
 */



//---------------Map Data Structure
/*Map is a built-in data structure introduced in ES6 that allows you to store key-value pairs 
where both the keys and values can be of any data type as keys including numbers , booleans , objects and even other map instances.

MAp prevents the order of key-value pairs as they were inserted, while objects may not be guarenteed to be in specific order.

Maps provide built-in methods for easy iteration
*/

/* const map = new Map();
const keyOne = "huxn";
const keyTwo = {};
const keyThree = function () {};
map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map.keys());
console.log(map.values());
console.log(map.delete(keyTwo));
console.log(map.size);

console.log(map);
 */

//challenge
/* 
const map1 = new Map();
map1.set("a", 1);
map1.set("b", 2);  // set method add key value pairs to map
map1.set("c", 3);
console.log(map1);

console.log(map1.get("a"));
console.log(map1.size);
map1.delete("b");
console.log(map1);
console.log(map1.size); */






//-----------------Set Data structure-------------

/*
Set is a built-in data structure in ES6 that represents a collection of unique values .
unlike arrays , set allows you to store only unique values ,which means duplicate values are automitically removed.
Each element can occur only once within a set.

Set objcets are useful when you need to store a list of unique elements and quickly for the existence of specific value.
*/

//add() - used to add elements to set
//delete() - removes element from set
//clear() - clears all the elements in set

/* const mySet = new Set();
mySet.add("apple");
mySet.add("banana");
mySet.add("orange");
console.log(mySet.has("huxn"))
mySet.delete("banana");
console.log(mySet);
mySet.clear();
console.log(mySet); */

//challenge

/* let letters = new Set();
letters.add("a");
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

for (i of letters) {
  console.log(i);
} */






// ---------------Symbols------------
/*  
Symbol is a unique and immutable primitive data type introduced
ECMA Script 6 (ES6). A symbol is often used as an identifier for
object properties to avoid potential naming conflicts.

Unlike strings or numbers, symbols are guaranteed to be unique.
  
when you create a symbol, it is unique and cannot be recreated or
changed. This uniqueness ensures that symbols will not collidę with property names, even if they have the same string
representation. 
*/




//comparing symbols
/* const mysymbol1 = Symbol("name");
const mysymbol2 = Symbol("name");

console.log(mysymbol1 == mysymbol2); */

//challenge

/* let sym = Symbol("foo");
console.log(typeof sym);

let obj = {};
obj[sym] = "some value for foo";
console.log(obj); */

//iteration of symbols

/* let obj1 ={
  "name" : "tony",
  "age" : 30,
}

for (let i in obj1){
  console.log(i);
}
 */


