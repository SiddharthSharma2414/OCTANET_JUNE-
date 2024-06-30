let taskList = [];

document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");
  const taskListElement = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function() {
    const newTask = taskInput.value.trim();
    if (newTask !== "") {
      taskList.push({ text: newTask, completed: false });
      taskInput.value = "";
      renderTaskList();
    }
  });

  taskListElement.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      const taskIndex = taskListElement.children.indexOf(event.target);
      taskList[taskIndex].completed = !taskList[taskIndex].completed;
      renderTaskList();
    }
  });

  function renderTaskList() {
    taskListElement.innerHTML = "";
    taskList.forEach(function(task, index) {
      const taskElement = document.createElement("LI");
      taskElement.textContent = task.text;
      if (task.completed) {
        taskElement.className = "completed";
      }
      taskListElement.appendChild(taskElement);
    });
  }
});
