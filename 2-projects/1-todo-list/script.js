function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    const listMember = document.createElement("li");
    listMember.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listMember.id = "list" + i;
    const textListMember = document.createTextNode(`${todos[i].task} `);
    listMember.appendChild(textListMember);

    const mySpan = document.createElement("span");
    mySpan.className = "badge bg-primary rounded-pill";
    mySpan.id = "mySpan" + i;
    const mySpan2 = document.getElementById("mySpan" + i);
    const spanItem1 = document.createElement("i");
    spanItem1.className = "fa fa-check";
    spanItem1.addEventListener("click", function () {
      lineThrough(listMember, i);
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

    if (todos[i].completed) {
      listMember.style.textDecoration = "line-through";
    }
  }
  const removeAllCompleted = document.createElement("button");
  removeAllCompleted.innerHTML = "Delete Completed";
  list.appendChild(removeAllCompleted);
  removeAllCompleted.className = "btn btn-primary mb-3";
  removeAllCompleted.addEventListener("click", function () {
    deleteAllCompletedTodos(todos);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

function lineThrough(listItem, i) {
  if (listItem.style.textDecoration != "line-through") {
    listItem.style.textDecoration = "line-through";
    todos[i].completed = true;
  } else {
    listItem.style.textDecoration = "";
    todos[i].completed = false;
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
function deleteAllCompletedTodos(listAlltodos) {
  // Write your code here...
  listAlltodos.map((item) => {
    if (item.completed) {
      const itemId = document.getElementById(
        "list" + listAlltodos.indexOf(item)
      );
      if (itemId != null) itemId.remove();
    }
  });
}
