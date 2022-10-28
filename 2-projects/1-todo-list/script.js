function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let i = 0; i < todos.length; i++) {
    newItem = document.createElement('li');
    list.appendChild(newItem);
    newItem.innerText = todos[i].task;
    newItem.className = "list-group-item d-flex justify-content-between align-items-center";

    spanElement = document.createElement('span');
    newItem.appendChild(spanElement);
    spanElement.className = "badge bg-primary rounded-pill";

  }

  let allSpanElements = document.querySelectorAll('span');
  let allListElements = document.querySelectorAll('li');
  
  firstLi = document.querySelector('li');
  
  for (let i = 0; i < allSpanElements.length; i++) {
    iElementOne = document.createElement('i');
    allSpanElements[i].appendChild(iElementOne);
    iElementOne.className = "fa fa-check";
    iElementOne.setAttribute("aria-hidden", "true");

    iElementOne.addEventListener('click', () => {

      if (allListElements[i].style.textDecoration == "line-through") {
        allListElements[i].style.textDecoration = "none";
      }
      else {
        allListElements[i].style.textDecoration = "line-through";
      }
    })

    iElementTwo = document.createElement('i');
    allSpanElements[i].appendChild(iElementTwo);
    iElementTwo.className = "fa fa-trash";
    iElementTwo.setAttribute("aria-hidden", "true");

    iElementTwo.addEventListener('click', () => {
      allListElements[i].remove(iElementTwo);
    })
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
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
