let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

const ulEl = document.querySelector("ul");

function populateTodoList(todos) {
  for (let item of todos) {
    // console.log(item.task);
    let itemsList = item.task;

    // create the element li
    const liEl = document.createElement("li");
    //class of the li
    liEl.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between align-items-center"
    );
    // amend the element to array
    liEl.innerHTML = itemsList;

    // create span
    const spanEl = document.createElement("span");
    // class of the li
    spanEl.setAttribute("class", "badge bg-primary rounded-pill");

    //create i
    const iElCheck = document.createElement("i");
    const iElTrash = document.createElement("i");

    // class of the i
    iElCheck.setAttribute("class", "fa fa-check");
    iElTrash.setAttribute("class", "fa fa-trash");

    // add the element to the UL
    ulEl.appendChild(liEl);
    liEl.appendChild(spanEl);
    spanEl.append(iElCheck, iElTrash);

    iElCheck.addEventListener("click", function () {
      if (liEl.style.textDecoration == "line-through") {
        liEl.style.textDecoration = "none";
      } else {
        liEl.style.textDecoration = "line-through";
      }
    });

    iElTrash.addEventListener("click", function () {
      liEl.parentNode.removeChild(liEl);
    });
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const liEl = document.createElement("li");

  liEl.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );

  const inputValue = document.querySelector("#todoInput").value;
  const textValueFromInput = document.createTextNode(inputValue);

  liEl.appendChild(textValueFromInput);

  if (inputValue === "") {
    alert("It is empty, write something.");
  } else {
    ulEl.appendChild(liEl);
  }

  document.querySelector("#todoInput").value = "";

  // span part
  const spanEl = document.createElement("span");
  // class of the li
  spanEl.setAttribute("class", "badge bg-primary rounded-pill");

  //create i
  const iElCheck = document.createElement("i");
  const iElTrash = document.createElement("i");

  // class of the i
  iElCheck.setAttribute("class", "fa fa-check");
  iElTrash.setAttribute("class", "fa fa-trash");

  // add the element to the UL
  ulEl.appendChild(liEl);
  liEl.appendChild(spanEl);
  spanEl.append(iElCheck, iElTrash);

  iElCheck.addEventListener("click", function () {
    if (liEl.style.textDecoration == "line-through") {
      liEl.style.textDecoration = "none";
    } else {
      liEl.style.textDecoration = "line-through";
    }
  });

  iElTrash.addEventListener("click", function () {
    liEl.parentNode.removeChild(liEl);
  });
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
