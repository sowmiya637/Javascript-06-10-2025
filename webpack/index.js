import { greet } from './utils.js';

const message = greet("Sowmiya");
console.log(message);

// Display in browser
const h1 = document.createElement("h1");
h1.textContent = message;
document.body.appendChild(h1);
