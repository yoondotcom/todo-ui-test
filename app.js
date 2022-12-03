const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkOne);

function addTodo(e) {

  e.preventDefault();   
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  todoInput.value = "";

  const completeButton = document.createElement("button");
  completeButton.innerHTML = `DONE`;
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = `DELETE`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);
}
function checkOne(e) {
  const item = e.target;
  console.log(item);

  if(item.classList[0] === "trash-btn") {
    todoDiv.appendRemove();
  }

  if(item.classList[0] === "complete-btn") {
    console.log('com' + item);
    todo
  }

}
