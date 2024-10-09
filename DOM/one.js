const { JSDOM } = require('jsdom');

// Create a new JSDOM instance with an HTML structure
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
  <body>
    <h1 id="title">Hello, World!</h1>
  </body>
  </html>
`);

// Access the simulated DOM
// const document = dom.window.document;

// // Perform DOM manipulation
// const title = document.getElementById('title');
// console.log('Before:', title.textContent);  // Output: "Hello, World!"

// // Change the content of the DOM element
// title.textContent = 'Hello, DOM in Node.js!';
// console.log('After:', title.textContent);   // Output: "Hello, DOM in Node.js!"

const title = document.querySelector('h1')
console.log(title);
