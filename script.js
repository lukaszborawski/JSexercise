const form = document.querySelector("form")
const ul = document.querySelector("ul")
const taskNumber = document.querySelector("h1 span")
const liElements = document.getElementsByClassName("task")
const input = document.querySelector("input")
const input2 = document.querySelector(".input2")
const toDoList = [];

const removeTask = e => {
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
  taskNumber.textContent = toDoList.length;
}

const addTask = e => {
  e.preventDefault();
  const text = input.value;
  if (text === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = text + " <button>Usuń</button>";
  toDoList.push(task);
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
  input.value = "";
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

form.addEventListener("submit", addTask);
input2.addEventListener("input", searchTask);