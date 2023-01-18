function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let todo of todos) {
    const li = document.createElement("li");
    li.innerHTML = todo.task;
    list.appendChild(li);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class = "fa fa-check"></i>';
    li.appendChild(checkBtn);

    checkBtn.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "";
      } else {
        li.style.textDecoration = "line-through";
      }
      todo.completed = !todo.completed;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class = "fa fa-trash"></i>';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let input = document.getElementById("todoInput");
  if (input.value !== "") {
    populateTodoList([{ task: input.value, completed: false }]);
    input.value = "";
  } else return;
}
const addBtn = document.getElementsByClassName("btn btn-primary mb-3")[0];
addBtn.addEventListener("click", addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...   

  let list = document.getElementById("todo-list");
  const lis = document.querySelectorAll("li");
  for (let l of lis) {
    if (l.style.textDecoration === "line-through") {
      list.removeChild(l);
    }
  }
}
const delBtnComp = document.getElementById("remove-all-completed");
  delBtnComp.addEventListener("click", deleteAllCompletedTodos)
