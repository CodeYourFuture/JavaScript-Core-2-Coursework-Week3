let todoList = document.getElementById("todo-list");
  for(let task of todos){
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("newTodo");
  let newLi = document.createElement("li");
  newLi.innerText = task;
  newLi.classList.add("todo-item");
  todoDiv.appendChild(newLi);

  let checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  checkBtn.classList.add("checkBtn");
  todoDiv.appendChild(checkBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  deleteBtn.classList.add("deleteBtn");
  todoDiv.appendChild(deleteBtn);
  todoList.appendChild(todoDiv);


}

