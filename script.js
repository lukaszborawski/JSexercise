const form = document.querySelector("form")
const ul = document.querySelector("ul")
const taskNumber = document.querySelector("h2 span")
const addInput = document.querySelector(".addInput")
const searchInput = document.querySelector(".searchInput")
const toDoList = [];

const removeTask = e => {
  const elementIndex = e.target.parentNode.dataset.key;
  removeLocalTodos(elementIndex);
  toDoList.splice(elementIndex, 1);
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
  taskNumber.textContent = toDoList.length;
}

const addTask = e => {
  e.preventDefault();
  const elementValue = addInput.value;
  if (elementValue === "") return;
  saveLocalTodos(elementValue);
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = elementValue + " <button>Usuń</button>";
  toDoList.push(task);
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
  addInput.value = "";
  taskNumber.textContent = toDoList.length;
  task.querySelector('button').addEventListener('click', removeTask);
}

const searchTask = e => {
  const searchText = e.target.value.toLowerCase();
  let tasks = toDoList.filter(task => task.textContent.toLowerCase().includes(searchText));
  ul.textContent = "";
  tasks.forEach(task => ul.appendChild(task));
  if (searchText === "") {
    ul.textContent = "";
    taskNumber.textContent = toDoList.length;
    toDoList.forEach((toDoElement, key) => {
      toDoElement.dataset.key = key;
      ul.appendChild(toDoElement);
    })
  }
  taskNumber.textContent = tasks.length;
}

const saveLocalTodos = (task) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

const removeLocalTodos = (task) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.splice(task, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const elementValue = todo;
    const task = document.createElement("li");
    task.className = "task";
    task.innerHTML = elementValue + " <button>Usuń</button>";
    toDoList.push(task);
    toDoList.forEach((toDoElement, key) => {
      toDoElement.dataset.key = key;
      ul.appendChild(toDoElement);
    })
    taskNumber.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', removeTask);
  })
}

document.addEventListener("DOMContentLoaded", getLocalTodos);
form.addEventListener("submit", addTask);
searchInput.addEventListener("input", searchTask);