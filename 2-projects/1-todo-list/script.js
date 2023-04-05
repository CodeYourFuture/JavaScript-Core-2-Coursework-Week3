// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
//   list.innerHTML = " ";

//   todos.forEach((todo, index) => {
//     let li = document.createElement("li");
//     li.classList.add("list-group-item");
//     li.innerText = todo.task;

//     let span = document.createElement("span");
//     span.classList.add("badge", "bg-primary", "rounded-pill");

//     let checkIcon = document.createElement("i");
//     checkIcon.classList.add("fa", "fa-check");
//     checkIcon.addEventListener("click", () => {
//       if (li.style.textDecoration === "line-through") {
//         li.style.textDecoration = "none";
//       } else {
//         li.style.textDecoration = "line-through";
//       }
//     });

//     let trashIcon = document.createElement("i");
//     trashIcon.classList.add("fa", "fa-trash");
//     trashIcon.addEventListener("click", () => {
//       li.remove();
//     });

//     span.appendChild(checkIcon);
//     span.appendChild(trashIcon);

//     li.appendChild(span);

//     list.appendChild(li);
//   });
// }

// //These are the same todos that currently display in the HTML
// //You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
    
// ];

// populateTodoList(todos);

// // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
//     let input = document.getElementById("new-todo");
//   let task = input.value.trim();

//   if (task !== "") {
//     let newTodo = { task: task, completed: false };
//     todos.push(newTodo);
//     populateTodoList(todos);
//     input.value = "";
//   }

// }

// //Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

//   //Write your code here...
//   function deleteAllCompletedTodos() {
//   const completedTodos = todoList.querySelectorAll('.completed');
//   completedTodos.forEach(todo => todo.remove());
//   const removeAllButton = document.getElementById(remove-All-btn);
  
//   removeAllButton.addEventListener('click', deleteAllCompletedTodos);
//   }





//practise work

// function populateTodoList(todos) {
//   const list = document.getElementById("todo-list");

//   todos.forEach((todo, index) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");
//     li.innerText = todo.task;

//     const span = document.createElement("span");
//     span.classList.add("badge", "bg-primary", "rounded-pill");

//     const checkIcon = document.createElement("i");
//     checkIcon.classList.add("fa", "fa-check");
//     checkIcon.setAttribute("aria-hidden", "true");
//     checkIcon.addEventListener("click", () => {
//       li.classList.toggle("text-decoration-line-through");
//     });

//     const deleteIcon = document.createElement("i");
//     deleteIcon.classList.add("fa", "fa-trash");
//     deleteIcon.setAttribute("aria-hidden", "true");
//     deleteIcon.addEventListener("click", () => {
//       li.remove();
//     });

//     span.appendChild(checkIcon);
//     span.appendChild(deleteIcon);
//     li.appendChild(span);
//     list.appendChild(li);
//   });
// }
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];




//practise work
//   populateTodoList(todos);
//   function addNewTodo(event) {
//   event.preventDefault();
//   const newTodoInput = document.getElementById("new-todo-input");
//   const newTodo = { task: newTodoInput.value, completed: false };
//   todos.push(newTodo);
//   populateTodoList(todos);
//   newTodoInput.value = "";
// }
// function deleteAllCompletedTodos() {
//   const listItems = document.querySelectorAll("#todo-list li");
//   listItems.forEach((li) => {
//     if (li.classList.contains("text-decoration-line-through")) {
//       li.remove();
//     }
//   });
// }
// const addTodoBtn = document.getElementById("add-todo-btn");
// addTodoBtn.addEventListener("click", addNewTodo);

// const deleteCompletedBtn = document.getElementById("delete-completed-btn");
// deleteCompletedBtn.addEventListener("click", deleteAllCompletedTodos);




// populateTodoList(todos);
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   let todoInputText = document.getElementById("todoInput").value;
//   if (todoInputText != "") {
//     let aTaskObject = {};
//     aTaskObject["task"] = todoInputText;
//     aTaskObject["completed"] = false;
//     todos.push(aTaskObject);
//     populateTodoList(aTaskObject);
//   }
//   document.getElementById("todoInput").value = "";
// }
// const addBtn = document.getElementById("add-todo-item");
// addBtn.addEventListener("click", addNewTodo);



function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  
  // Clear the list to avoid duplicating items
  list.innerHTML = "";

  // Loop through each todo
  todos.forEach((todo, index) => {
    // Create a new <li> element for each todo
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = todo.task;

    // Create the buttons for each todo
    let span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";
    span.innerHTML = `
      <i class="fa fa-check" aria-hidden="true"></i>
      <i class="fa fa-trash" aria-hidden="true"></i>
    `;
    let checkButton = span.querySelector(".fa-check");
    let deleteButton = span.querySelector(".fa-trash");

    // Apply line-through styling if the todo is completed
    if (todo.completed) {
      li.style.textDecoration = "line-through";
      checkButton.classList.add("text-white");
    }

    // Toggle line-through styling on click
    checkButton.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none";
        checkButton.classList.remove("text-white");
        todos[index].completed = false;
      } else {
        li.style.textDecoration = "line-through";
        checkButton.classList.add("text-white");
        todos[index].completed = true;
      }
    });

    // Delete the todo on click
    deleteButton.addEventListener("click", () => {
      li.remove();
      todos.splice(index, 1);
    });

    // Add the buttons to the <li> element and add the <li> element to the list
    li.appendChild(span);
    list.appendChild(li);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);



function addNewTodo(event) {
  event.preventDefault();
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', () => {
    newTodo.classList.toggle('completed');
  });
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.addEventListener('click', () => {
    newTodo.remove();
  });
  newTodo.appendChild(completeButton);
  newTodo.appendChild(deleteButton);
  todoList.appendChild(newTodo);
  todos.push({ text: todoInput.value, completed: false });
  todoInput.value = '';
}

function deleteAllCompletedTodos() {
  const completedTodos = document.querySelectorAll('.completed');
  completedTodos.forEach(todo => {
    todo.remove();
    const index = todos.findIndex(t => t.text === todo.innerText);
    todos.splice(index, 1);
  });
}











