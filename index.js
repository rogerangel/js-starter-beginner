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