// -------------Methods----------
//function inside an object
// const person = {
//   name: "karthi",
//   age: 22,
//   greet: function () {
//     return `hello i am ${person.name} and i am ${person.age} years old`;
//   },
// };

// a = person.greet();
// console.log(a);




// ------------JSON--------------
//the keys should be enclosed in doubles quotes (" ") in JSON data
// const person = {
//   name: "sam",
//   age: 22,
//   email: "karthi80",
// };
// a= JSON.stringify(person);
// console.log(a);
// console.log(typeof a);





//------------------Dates-------------
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDay();
// const hours = date.getHours();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hours);





//-------------SetInterval and SetTimeout----------------
// setInterval(function () {
//   console.log(`this will run every 4 sec`);
// }, 4000);

// setTimeout(function () {
//   console.log(`this will run after 4 sec`);
// }, 4000);






//-------------Template Strings or Template litterals----------
//template literals are  feature in js that allows you to create strings with embedded expression .
//they are denoted by backticks (` `) instead of single or double quotes.

// console.log(`This is                  some random
//     text`);
// const firstName = "Spider";
// const lastName = "man";
// console.log(`He is ${firstName} ${lastName}`);





// ------------Arrow functions-----------
// function double(number) {
//   return number * 2;
// }
// console.log(double(10));

// const no=(number)=>number * 2;
// console.log(no(10));




// -----------default function parameters-----------
// function multiply(a, b = 1) {
//   console.log(a * b);
// }
// multiply(10, 10);





// -----------Spread Operator.......
//  ...   -  Spread operator
// it takes the objects or arrays (iterables) as input and separates each element in it

/* const obj1 = { x: 1, y: 2 , a : 6 };
const obj2 = { z: 3 };

const concat_obj = { ...obj1, ...obj2 };
console.log(concat_obj);
 */




// -----------Rest parameter---------
//The rest parameter syntax allows a function to accept an indefinite amount of arguments
//the rest paramter must be at last in parameter list

/* function user(x, ...userData) {

  console.log(x);
  console.log(userData);
}

user("Spiderman", "SuperHero", "Avenger", "teenager");
 */





// -------------Destructuring--------
//Destructuring allows us to unpack values fromm data-structures (Arrays , Objects) into separate distinct variables.

// function f() {
//   return [1, 2, 3];
// }

// const [a, b, c] = f();
// console.log(a);
// console.log(b);
// console.log(c);

//Assigning the rest of an array to a variable
/* const [a, ...b] = [1, 2, 3, 4, "hii", "Hello"];
console.log(a);
console.log(b); */

//challenge
// const colors = ["red", "green", "blue", "yellow", "orange"];

// const [color1, color2, color3] = colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);




// -----------Object Destructuring
//in Object Destructuring , order doesn't matter but the name does matter.

//challenge
// const person = {
//   name: "Tony Stark",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// const { name, age, country } = person;
// console.log(name, age, country);

//Renaming the variables in object destructuring
// const num = { x: 100, y: 200 };
// const { x: new1, y: new2 } = num;
// console.log(new1);
// console.log(new2);

//challenge

// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// const { name: personName, age: personAge, country: personCountry } = person;

// console.log(personName);
// console.log(personAge);
// console.log(personCountry);





// -----------Function Destructuring
// const person = {
//   name: "Steve",
//   age: 40,
//   country: "USA",
// };

// function personInfo({ name, age, country }) {
//   console.log(`Name : ${name}`);
//   console.log(`Age : ${age}`);
//   console.log(`country : ${country}`);
// }

// personInfo(person);





//-----------Nested Destructuring
/* const songs = [
  { name: "Born to Die", singer: "Lana Del Rey", duration: 4.0 },
  { name: "Summertime Sadness", singer: "Lana Del Rey", duration: 4.0 },
  { name: "Perfect", singer: "ED sheeran", duration: 4.0 },
  { name: "lovely", singer: "Billie eilish", duration: 4.0 },
];
const [, , , { singer: s }] = songs;
const [, {singer : L}, , ] = songs;
console.log(s);
console.log(L); */






//-----------the ternary operator is Javascript is a concise way of writing conditional expression
//it is a only operator that takes 3 operands
// syntax
// condition ? exec-if-true : exec-if-false;
//it only works for if else statement , not else if.

// let password = 8;

// function passwordcheck(ps) {
//   return ps >= 8 ? "Password is Strong" : "password is weak";
// }

// a = passwordcheck(password);
// console.log(a);

// let person;

// let personhasmoney = person ? "buy products" : "They should bring money";
// console.log(personhasmoney);

