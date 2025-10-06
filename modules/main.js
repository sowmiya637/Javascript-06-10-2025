import Todo from './todo.js';
import { capitalize } from './utils.js';

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () => {  //handle button click event
  const task = input.value.trim();
  if (task) {
    Todo.addTask(capitalize(task));
    input.value = "";
  }
});
