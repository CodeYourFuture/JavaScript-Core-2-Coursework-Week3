function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.innerText = todo.task;
    li.classList.add("list-group-item");
    
    const completedBtn = document.createElement("button");
    completedBtn.innerText = "Done";
    completedBtn.classList.add("btn", "btn-primary", "me-2");
    completedBtn.addEventListener("click", () => {
      li.classList.toggle("text-decoration-line-through");
    });
    li.appendChild(completedBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(deleteBtn);
    
    list.appendChild(li);
  });

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Complete everything", completed: false },
  { task: "Conquer Earth", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
    const todoInput = document.querySelector('#todoInput');
    const newTask = todoInput.value.trim();
    
    if (newTask !== "") {
      const todo = { task: newTask, completed: false };
      todos.push(todo);
      populateTodoList(todos);
      todoInput.value = "";
    }
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  //event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}
const addBtn = document.querySelector('btn-primary');
addBtn.addEventListener("click", addNewTodo);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos.forEach((todo, index) => {
    const li = document.querySelectorAll('list-group')[index];
    
    if (li.classList.contains("text-decoration-line-through")) {
      todos.splice(index, 1);
      li.remove();
    }
  });
}

const removeAllCompletedBtn = document.querySelector('#remove-all-completed');
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

