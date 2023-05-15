function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Write your code to create todo list elements with completed and delete buttons here,
  //all todos should display inside the "todo-list" element.

  list.innerHTML = "";
  for (element of todos) {
    let taskDiv = document.createElement("div");

    let taskEl = document.createElement("li");
    taskEl.innerHTML = `${element.task}  `;
    // <span class="badge bg-primary rounded-pill">
    //   <i class="fa fa-check" aria-hidden="true"></i>
    //   <i class="fa fa-trash" aria-hidden="true"></i>
    // </span>;
    let taskSpan = document.createElement("span");
    let taskCheck = document.createElement("i");
    taskCheck.className = "fa fa-check";
    let taskTrash = document.createElement("i");
    taskTrash.className = "fa fa-trash";
    taskEl.appendChild(taskSpan);
    taskSpan.appendChild(taskCheck);
    taskSpan.appendChild(taskTrash);

    taskEl.className = "card"; //temp to show result

    // let liBtn = document.createElement("button");
    // liBtn.innerText= "completed"
    // liBtn.className = "btn btn-primary mb-3";

    list.appendChild(taskDiv);
    taskDiv.appendChild(taskEl);
    // taskDiv.appendChild(liBtn);

    taskCheck.addEventListener("click", () => {
      if (taskEl.style.textDecoration === "line-through") {
        taskEl.style.textDecoration = "";
      } else {
        taskEl.style.textDecoration = "line-through";
      }
    });

    taskTrash.addEventListener("click", () => {
      // taskDiv = null;
      list.removeChild(taskDiv);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  // { task: "Wash the dishes", completed: false },
  // { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

//not sure where best to locate the [ add to do ] event listener
let addBtn = document.getElementById("add-to-do");
let inputBox = document.getElementById("todoInput");
addBtn.addEventListener("click", function (event) {
  addNewTodo(event, inputBox.value);
  inputBox.value = "";
});

//Done=  This function will take the value of the input field
//and add it as a new todo to the bottom of the todo list.
//These new todos will need the completed and delete buttons adding like normal.

function addNewTodo(event, inputTask) {
  event.preventDefault();
  // Done = Write your code here... and remember to reset the input field
  //Done = to be blank after creating a todo!

  let newObject = {
    task: inputTask,
    completed: false,
  };
  todos.push(newObject);
  populateTodoList(todos);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
