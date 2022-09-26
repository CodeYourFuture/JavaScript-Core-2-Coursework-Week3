function populateTodoList(todos)
{
  let mainList = document.getElementById("todo-list");

  while (mainList.hasChildNodes())
  {
    mainList.removeChild(mainList.firstChild);
  }
  
  todos.forEach((item) => 
  {
    let btn1 = document.createElement("i");
    let btn2 = document.createElement("i");
    let span = document.createElement("span");
    let sublist = document.createElement("li");

    btn1.className = "fa fa-check";
    btn2.className = "fa fa-trash";
    span.className = "badge bg-primary rounded-pill";
    sublist.className = "align-items-center d-flex justify-content-between list-group-item";
    sublist.textContent = item.task;

    btn2.setAttribute("aria-hidden", "true");

    span.appendChild(btn1);
    span.appendChild(btn2);
    sublist.appendChild(span);
    mainList.appendChild(sublist);


    btn1.addEventListener("click", () =>
    {
      if (sublist.style.textDecoration === "line-through") 
      {
        sublist.style.textDecoration = "none";
      }

      else
      {
        sublist.style.textDecoration = "line-through";
      }
    });

    btn2.addEventListener("click", () =>
    {
      //delete li;
      sublist.parentElement.removeChild(sublist);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos =
[
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event)
{
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  
  let input = document.getElementById("todoInput");
  let create = input.value;
  if (!create)
  {
    create = ".";
  }
  todos.push
  ({
    task: create,
    completed: false
  });

  populateTodoList(todos);
  
  input.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
