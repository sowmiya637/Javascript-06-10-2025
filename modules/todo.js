let tasks = [];

// Add a new task
function addTask(task) {
  tasks.push(task);
  displayTasks();
}

// Display tasks in the DOM
function displayTasks() {
  const list = document.getElementById("taskList");  //<ul id="taskList"> select the element
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Cancel";
    delBtn.addEventListener("click", () => {
      removeTask(index);
    });
    li.appendChild(delBtn);

    list.appendChild(li);
  });
}

// Remove task by index
function removeTask(index) {
  tasks.splice(index, 1);   //Here: index → start index, 1 → delete 1 item
  displayTasks();
}

export default { addTask, tasks };  //addTask → function to add task ,tasks → array holding all tasks
