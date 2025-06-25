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

// Selecting the form and output area
const form = document.getElementById('invoice-form');
const output = document.getElementById('output');

if (form) {
  form.addEventListener('submit', function(event) { 
    event.preventDefault();

    const clientName = document.getElementById('clientName').value;
    const service = document.getElementById('service').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const invoice = {
      clientName,
      service,
      amount,
      paid: false
    };

    const invoiceDisplay = document.createElement('div');
    invoiceDisplay.style.marginTop = '1rem';
    invoiceDisplay.innerHTML = `
      <strong>Invoice submitted:</strong><br>
      Client: ${invoice.clientName}<br>
      Service: ${invoice.service}<br>
      Amount: $${invoice.amount.toFixed(2)}<br>
      Paid: No
    `;

    output.appendChild(invoiceDisplay);

    log(`Invoice Submitted: ${invoice.clientName} - $${invoice.amount.toFixed(2)} for ${invoice.service}`);

    console.log('Invoice Object:', invoice);

    form.reset();
  });
}

// Example: Hello World
// log('Hello, World!');

// ===== Exercise code below =====

// Exercise 1: Hello World
// TODO: Uncomment the line below and run the code
// log('Hello, World!');