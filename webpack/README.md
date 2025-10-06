# Webpack Demo

A simple **Webpack** project demonstrating module bundling and basic JavaScript usage. This project shows how to import/export modules and bundle them using Webpack.


- Modular JavaScript using ES6 `import`/`export`
- Bundled into a single file (`bundle.js`) using Webpack
- Displays a greeting message in the browser and console
- Simple setup for learning Webpack basics


1. **src/utils.js**  
   - Exports a `greet` function that returns a greeting string.

```javascript
export function greet(name) {
  return `Hello, ${name}! Welcome to Webpack demo.`;
}

src/index.js

Imports the greet function from utils.js.

Creates a message using greet().

Logs the message in the console.

Adds an <h1> element with the message to the HTML body.

import { greet } from './utils.js';

const message = greet("Sowmiya");
console.log(message);

const h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);


webpack.config.js

Defines the entry point (index.js) and output (bundle.js).

Bundles modules in development mode.

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
};


dist/index.html

Loads the bundled JavaScript file (bundle.js).

<script src="bundle.js"></script>

