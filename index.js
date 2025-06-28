/*
 * JavaScript Fundamentals Starter
 * Write your code for each exercise below.
 */

// Utility function to log messages to the console and page
function log(message) {
  console.log(message);
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    const p = document.createElement('p');
    p.textContent = message;
    outputDiv.appendChild(p);
  }
}

// Example: Hello World
// log('Hello, World!');

// ===== Exercise code below =====

// Exercise 1: Hello World
console.log('Hello, World!');

// TODO: Uncomment the line below and run the code
// log('Hello, World!');

// Exercise 2: Variables and Data Types
let name = "Estanler";
let age = 35;
var isStudent = true;
let greeting = "Hello";
let score = 99;
let passed = true; 
let emptyvalue = null;
let unkownvalue;
let user = { name: "Estanler", age: 35 };
 
console.log(typeof greeting); // string
console.log(typeof score); // number
console.log(typeof passed); // boolean
console.log(typeof emptyvalue); // object (null is a special case in JavaScript)
console.log(typeof unkownvalue); // undefined
console.log(typeof user); // object

//Exercise 3: Operators
let x = 10;
let y = 3;

console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log("Remainder", x % y); // Modulus

console.log("Is x equal to y?", x == y); 
console.log("Is x stricly equal to y?", x === y);
console.log("Is x not equal to y?", x != y);
console.log("Is x greater than y?", x > y);
console.log("Is x less than or equal to y?", x <= y);

age = 35;
let isStudent= true;
let isAdult = age >= 18;

console.log("Is the person an adult?", isAdult === true);

// Exercise 4: Control Flow
let score = 87;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 84) {
  console.log("Grade: B");
} else if (score <= 83 && score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Failed Try Again");
}

 // Exercise 4:C Loops

let names = ["Estanler", "John", "Jane", "Doe"];

for (let i = zero; i < names.length; i++) {
  console.log(names[i]);
}