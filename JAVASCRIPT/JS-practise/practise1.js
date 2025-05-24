//----------strings---------
// let facActorFirstName = "Andrew";
// let facActorLastName = "Garfield";
// let fullName = facActorFirstName + facActorLastName;
// console.log(fullName);
// let capname =  fullName
// .toUpperCase();
// console.log(capname);
// let message = `My fac actor name is ${capname} and he is spiderman`;
// message += 'and he is best';
// console.log(message);



//------------conditional statements-----------
// let pass = 8;
// if (pass == 8) {
//   console.log("welcome");
// } else if (pass <= 8) {
//   console.log("password is too short");
// } else if (pass >= 8) {
//   console.log("password is too long");
// } else {
//   console.log("please provide password");
// }



//------------switch--------------
// let day = "monday";

// switch (day) {
//   case "monday":
//     console.log("day 1");
//     break;
//   case "tuesday":
//     console.log("day 2");
//     break;
//   case "wednesday":
//     console.log("day 3");
//     break;
//   case "thursday":
//     console.log("day 4");
//     break;
//   default:
//     console.log("sunday");
// }



//-------loops-------------
//while
// let i = 10;
// while (i <= 100) {
//   console.log("Karthikeyan", i);
//   i++;
// }

//do-while
// let i = 20;
// do {
//   console.log("your name", i);
//   i++;
// } while (i <= 400);



//------logical operators------
// 1. LOGICAL AND (&&) - TRUE IF BOTH OPERANDS/NOOLEAN VALUES ARE TRUE , ELSE FALSE.
// 2. LOGICAL OR (||) - TRUE IS EITHER ONE OF THE OPERANDS/BOOLEAN IS TRUE , ELSE FALSE.
// 3. LOGICAL NOT (!) - TRUE IF OPERANDS IS FALSE AND VICE-VERSA



//--------Arays---------
// let favSingers = ["Lana", "billie", "edsheran"];
// console.log(favSingers[0]);
// let favNumbers = [10, 20, 30, 40];
// let mixedArr = ["string", favSingers, 123, true];
// console.log(mixedArr[1][0]);



//-------Objects--------
// let car = {
//   type: "electric",
//   model: "model 1",
//   color: "red",
// };

// car.type = "Toyota";
// car.wheels = "4";
// console.log(car);



// ------------Functions----------
//------------function declaration
// function myFunction(a, b) {
//   return a * b;
// }

// result = myFunction(10, 10);
// console.log(result);

//  ------------function expression
// const greetings = function (user) {
//   console.log(`hello ${user}`);
// };
// greetings("karthi");

//-------------callback function
//when we provide funciton as an argument to other function,
//that function is known as a callback fumction

// function showCallFunc(fn) {    //Accepts a function (fn) as an argument
//     const val = 10;            // Defines a constant 'val' with value 10
//     fn(val);                   // Calls the function 'fn', passing 'val' (10) as an argument
//   }

//   showCallFunc(function (val) {    //Passes an anonymous function as an argument to 'showCallFunc'
//     console.log(val);              //Logs the value received (which is 10)
//   });



// ---------Scope------------
// Scope in javascript refers to the current context of code , which determines the accessibility of variables to javascript

//there are 2 types
//Global scope - variables that are declared outside the blockk 
//Local scope - variables that are declared inside the block




