const todoFormEl = document.querySelector(`.todo-form`);
const todoEl = todoFormEl.querySelector(`.todo-form input`);
const todoUlEl = document.querySelector(`.todo-ul`);
const NAME = `todo`;
let todo = [];

(function init() {
  loadTodo();
  todoFormEl.addEventListener(`submit`, handleSubmit);
  todoEl.focus();
})();

function loadTodo() {
  const loadedTodo = localStorage.getItem(NAME);

  if (loadedTodo !== null) {
    const parsedTodo = JSON.parse(loadedTodo);
    parsedTodo.forEach((todo) => {
      paintTodo(todo.text);
    });
  }
}

function paintTodo(text) {
  const liEl = document.createElement(`li`);
  const delBtnEl = document.createElement(`button`);
  const spanEl = document.createElement(`span`);
  const ids = todo.map((item) => item.id);
  let newId = 1;

  while (true) {
    if (ids.indexOf(newId) === -1) {
      break;
    } else {
      newId++;
    }
  }
  delBtnEl.className = `del-btn`;
  delBtnEl.addEventListener(`click`, deleteTodo);
  spanEl.innerText = text;
  liEl.appendChild(delBtnEl);
  liEl.appendChild(spanEl);
  liEl.id = newId;
  todoUlEl.appendChild(liEl);
  const toDoObj = {
    text: text,
    id: newId,
  };
  todo.push(toDoObj);
  saveTodo();
}

function handleSubmit(evt) {
  evt.preventDefault();
  if (todoEl.value.trim().length) {
    const currentValue = todoEl.value.trim();

    paintTodo(currentValue);
    todoEl.value = ``;
  }
}

function saveTodo() {
  localStorage.setItem(NAME, JSON.stringify(todo));
}

function deleteTodo(event) {
  const btnEl = event.target;
  const liEl = btnEl.parentNode;
  todoUlEl.removeChild(liEl);
  todo = todo.filter((todo) => {
    return todo.id !== parseInt(liEl.id);
  });
  saveTodo();
}
