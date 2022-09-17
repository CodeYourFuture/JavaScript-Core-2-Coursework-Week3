function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  let list = document.getElementById("todo-list");

  // clear all pre-existing child elements in the ul, so it can be re-populated
  // while there exists a child element in "list" remove it until there are no child elements left
  while (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }

  // iterate over the todos array
  // create two i elements, for the "check" and "trash" icons (adding classes)
  // create a span element to contain the two i elements (adding classes)
  // create an li element (adding classes)
  // if the iterated object's "completed" property value is "true" then add the "completed" class;
  // set the li element's textContent to the iterated object's "task" property value
  todos.forEach(element => {
    const iElementOne = document.createElement("i");
    iElementOne.className = "fa fa-check";
    iElementOne.addEventListener("click", completeToDo);
    
    const iElementTwo = document.createElement("i");
    iElementTwo.className = "fa fa-trash";
    iElementTwo.addEventListener("click", deleteToDo);

    const spanElement = document.createElement("span");
    spanElement.className = "badge bg-primary rounded-pill";

    spanElement.appendChild(iElementOne);
    spanElement.appendChild(iElementTwo);

    const liElement = document.createElement("li");
    liElement.className = "list-group-item d-flex justify-content-between align-items-center";
    if (element.completed === true) {
      liElement.classList.add("completed");
    }
    liElement.textContent = element.task;
  
    liElement.appendChild(spanElement);

    list.appendChild(liElement);
  });

}

function completeToDo(event) {

  // console.log(`BEFORE className: ${event.target.parentNode.parentNode.classList}`)

  // get the text content from the li (to get the task description)
  const taskToComplete = event.target.parentNode.parentNode.textContent;
  // console.log(`taskToComplete: ${taskToComplete}`)

  // find the index of the object in the todos array whose task property === the text content from above
  const indexOfTask = todos.findIndex(element => element.task === taskToComplete);
  // console.log(`indexOfTask: ${indexOfTask}`)

  // console.log("BEFORE todos[indexOfTask]:");
  // console.log(todos[indexOfTask]);

  // edit that specific object in the todos array, toggle the completed property value (true/false)
  if (todos[indexOfTask].task === taskToComplete) {
    todos[indexOfTask].completed = !todos[indexOfTask].completed;
  }

  // reflect the changes stylistically by adding/removing the class "completed"
  // i am CHOOSING to be explicit with true/false and with else if (i know it can be done without)
  if (todos[indexOfTask].completed === true) {
    event.target.parentNode.parentNode.classList.add("completed");
  } else if (todos[indexOfTask].completed === false) {
    event.target.parentNode.parentNode.classList.remove("completed");
  }

  // console.log("AFTER todos[indexOfTask]:");
  // console.log(todos[indexOfTask]);

  // console.log(`AFTER className: ${event.target.parentNode.parentNode.classList}`)

}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {

  // console.log("todos array BEFORE:");
  // console.log(todos);

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  // push the a new object to the todos array, using the input value from the input field, and by default setting the completed property to false;
  todos.push({ task: document.getElementById("todoInput").value, completed: false })
  // reset the input field
  document.getElementById("todoInput").value = "";

  // console.log("todos array AFTER:")
  // console.log(todos);

  // after the addNewToDo operation re-populate the list
  populateTodoList(todos);

}

function deleteToDo(event) {
  
  // console.log("todos array BEFORE:")
  // console.log(todos);

  // get the text content from the li (to get the task description)
  const taskToComplete = event.target.parentNode.parentNode.textContent;
  // console.log(`taskToComplete: ${taskToComplete}`);

  // find the index of the object in the todos array whose task property === that value
  const indexOfTask = todos.findIndex(element => element.task === taskToComplete);
  // console.log(`indexOfTask: ${indexOfTask}`)

  // filter the todos array, returning only elements whose index does not match the indexOfTask
  todos = todos.filter((element, index) => index !== indexOfTask);

  // console.log("todos array AFTER:")
  // console.log(todos);

  // after the deleteToDo operation re-populate the list
  populateTodoList(todos);

}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {

  // console.log("todos array BEFORE:");
  // console.log(todos);

  // filter the todos array, returning only elements whose completed property is false
  todos = todos.filter(element => element.completed === false);

  // console.log("todos array AFTER:")
  // console.log(todos);

  // after the deleteAllCompletedTodos operation re-populate the list
  populateTodoList(todos);

}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Feed the cat", completed: true},
  { task: "Have a shower", completed: true},
  { task: "30 Minutes of Meditation", completed: true},
  { task: "Keep learning JavaScript", completed: false}
];

populateTodoList(todos);