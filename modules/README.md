# ES6 Module To-Do App

A simple **To-Do List** application built using **ES6 modules**. This app allows users to add tasks, display them in a list, and remove tasks individually.

- Add a task to the list
- Display tasks dynamically in the DOM
- Remove tasks using a "Cancel" button
- Capitalizes the first letter of each task automatically
- Modular ES6 structure for cleaner code


---

## How It Works

1. **index.html**  
   - Contains the input field, "Add Task" button, and the task list `<ul>`.
   - Loads `main.js` as an ES6 module.

2. **main.js**  
   - Imports `Todo` from `todo.js` and `capitalize` from `utils.js`.
   - Handles the click event for adding tasks.
   - Uses `capitalize` to ensure tasks start with a capital letter.
   - Calls `Todo.addTask()` to add the task to the list.

3. **todo.js**  
   - Maintains a `tasks` array to store all tasks.
   - Provides `addTask()` to add a task and update the UI.
   - Provides `displayTasks()` to render the tasks in the DOM.
   - Provides `removeTask()` to delete a task by index.

4. **utils.js**  
   - Contains helper functions like `capitalize()` to manipulate strings.

## Code Example

```javascript
import Todo from './todo.js';
import { capitalize } from './utils.js';

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task) {
    Todo.addTask(capitalize(task));
    input.value = "";
  }
});
