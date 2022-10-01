function populateTodoList(todos) {
  var list = document.getElementById("todo-list");

  todos.forEach((item) => {
    var lists = document.createElement("li");
    lists.setAttribute("id", "lista");
    lists.className =
      "list-group-item d-flex justify-content-between align-items-center";
    list.appendChild(lists);
    lists.innerText = item.task;

    // to create the span

    var spann = document.createElement("span");
    spann.className = "badge bg-primary rounded-pill";
    lists.appendChild(spann);
    // to create an i tag

    var ii = document.createElement("i");
    ii.className = "fa fa-check";
    ii.ariaHidden = "true";
    spann.appendChild(ii);

    var is = document.createElement("i");
    is.className = "fa fa-trash";
    is.ariaHidden = "true";
    spann.appendChild(is);

    ii.addEventListener("click", clicked);
    function clicked() {
      ii.parentElement.parentElement.classList.toggle("line-through");
    }

    is.addEventListener("click", clicking);
    function clicking() {
      lists.remove(document.getElementById("lista"));
    }
  });

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
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
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  var val = document.querySelector(".form-control");
  let valvalue = [
    {
      task: val.value,
    },
  ];
  populateTodoList(valvalue);
  val.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  var toDo = document.querySelectorAll("li");

  for (let i = 0; i < toDo.length; i++) {
    if (toDo[i].classList.contains("line-through")) {
      toDo[i].remove();
    }
  }
}
setInterval(deleteAllCompletedTodos, 1000);
