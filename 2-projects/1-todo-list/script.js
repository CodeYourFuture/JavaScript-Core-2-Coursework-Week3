function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    const listMember = document.createElement("li");
    listMember.className =
      "list-group-item d-flex justify-content-between align-items-center";
    const textListMember = document.createTextNode(`${todos[i].task} `);
    listMember.appendChild(textListMember);

    const mySpan = document.createElement("span");
    mySpan.className = "badge bg-primary rounded-pill";
    mySpan.id = "mySpan" + i;
    const mySpan2 = document.getElementById("mySpan" + i);
    const spanItem1 = document.createElement("i");
    spanItem1.className = "fa fa-check";
    spanItem1.addEventListener("click", function () {
      lineThrough(listMember);
    });
    const spanItem2 = document.createElement("i");
    spanItem2.className = "fa fa-trash";
    spanItem2.addEventListener("click", function () {
      removeItem(listMember);
    });
    mySpan.appendChild(spanItem1);
    mySpan.appendChild(spanItem2);

    listMember.appendChild(mySpan);
    list.appendChild(listMember);
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function lineThrough(listItem) {
  if (listItem.style.textDecoration != "line-through") {
    listItem.style.textDecoration = "line-through";
  } else {
    listItem.style.textDecoration = "";
  }
}

function removeItem(listItem) {
  listItem.remove();
}

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
