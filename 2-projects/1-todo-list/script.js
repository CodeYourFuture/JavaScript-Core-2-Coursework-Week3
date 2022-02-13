function populateTodoList(todos) {
  let ul = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let [index, item] of todos.entries()) {
    // wtf is this?
    let li = document.createElement("li");
    li.innerText = item.task;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    let span = document.createElement("span"),
      icon1 = document.createElement("i"),
      icon2 = document.createElement("i");
    span.classList.add("badge", "bg-primary", "rounded-pill");
    icon1.classList.add("fa", "fa-check");
    icon1.style.marginRight = "0.25rem";
    icon2.classList.add("fa", "fa-trash");
    icon1.ariaHidden = "true";
    icon2.ariaHidden = "true";
    span.append(icon1, icon2);
    li.append(span);
    ul.append(li);
    icon1.addEventListener("click", () => {
      if (
        icon1.parentElement.parentElement.style.textDecoration ===
        "line-through"
      ) {
        icon1.parentElement.parentElement.style.textDecoration = "none";
      } else {
        icon1.parentElement.parentElement.style.textDecoration = "line-through";
      }
    });
    icon2.addEventListener("click", () => {
      li.remove();
      todos.splice(index, 1);
      console.log(todos);
    });
    // console.log("logs:", icon1.parentElement.parentElement.style.textDecoration = "line-through");
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
  let li = document.createElement("li"),
    input = document.getElementById("todoInput");
  li.innerText = input.value;
  input.value = "";
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  let span = document.createElement("span"),
    icon1 = document.createElement("i"),
    icon2 = document.createElement("i");
  span.classList.add("badge", "bg-primary", "rounded-pill");
  icon1.classList.add("fa", "fa-check");
  icon1.style.marginRight = "0.25rem";
  icon2.classList.add("fa", "fa-trash");
  icon1.ariaHidden = "true";
  icon2.ariaHidden = "true";
  span.append(icon1, icon2);
  li.append(span);
  document.getElementById("todo-list").append(li);
  icon1.addEventListener("click", () => {
    if (
      icon1.parentElement.parentElement.style.textDecoration === "line-through"
    ) {
      icon1.parentElement.parentElement.style.textDecoration = "none";
    } else {
      icon1.parentElement.parentElement.style.textDecoration = "line-through";
    }
  });
  icon2.addEventListener("click", () => {
    li.remove();
  });
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
