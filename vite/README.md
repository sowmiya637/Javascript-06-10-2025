# Vite Counter App

A simple **interactive counter** web application built using **Vite**. This project demonstrates using ES modules, modern JavaScript, and Vite’s fast development environment.


- Increment a counter by clicking a button
- Real-time counter updates in the DOM
- Modular ES6 JavaScript structure
- Dark and light theme support via CSS


1. **index.html**  
   - Contains a `<div id="app"></div>` where the app is rendered.
   - Loads `main.js` as a module.

2. **main.js**  
   - Imports the `setupCounter` function from `counter.js`.
   - Dynamically renders HTML content including logos, heading, counter button, and description.
   - Calls `setupCounter()` with the counter button element to initialize the counter functionality.

3. **counter.js**  
   - Maintains a `counter` variable.
   - `setupCounter(element)` sets up click event on the element to increment the counter.
   - Updates the innerHTML of the button with the current count.

4. **style.css**  
   - Provides dark/light theme styling.
   - Styles logos, heading, buttons, and other elements.
   - Includes hover effects for interactive UI.

