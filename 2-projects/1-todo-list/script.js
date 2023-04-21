
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let todo of todos) {
    const li = document.createElement("li");
    li.innerHTML = todo.task;
    list.appendChild(li);

    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = '<i class = "fa fa-check"></i>';
    li.appendChild(checkBtn);

    checkBtn.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "";
      } else {
        li.style.textDecoration = "line-through";
      }
      todo.completed = !todo.completed;
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class = "fa fa-trash"></i>';
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
  }
}

// The purpose of the code. I start with a function named populateTodoList that with an array of todo objects as a parameter. 
// The function creates a todo list element and adds it to the todo-list element of the DOM. 
// For each todo item in the input array, the function creates an HTML element for the todo item with a task description, 
// a completed button, and a delete button.

// It start with a function populateTodoList that has an array of todos. Inside the brackets, I have a variable list with an 
// .getElementsById for a todo-list. Then I have a for loop that iterates through each todo item and create a new li element.
// The .innerHTML of the list created append to the todo-list. 
// Two buttons are then created for each todo item: a completed button and a delete button. Start see code for button: "The checkBtn button 
// is created using the createElement method..innerHTML sets an icon for completed task.(In HTML, the <i> tag is used to 
// represent icons or graphics. creates an icon of a check mark using the Font Awesome library. The class attribute fa fa-check 
// specifies the type of icon to use, which in this case is the check mark icon.) Also deleteBtn button is using the 
// createElement method, its innerHTML property is set to an icon representing a trash bin. The .addEventListener method is used
// to add an event listener to the checkBtn. When th button is clicked it toggles the text decoration of the list (li element) between
// line-through and an empty string. In the todo.completed the items ae also toggled to choose true or false. 
// The variable const deleteBtn use .createElement for button. When the button is clicked the li element is removed from the
// todo-list using .removeChild method" End see code for button.

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);


// The variable let todos creates an array of tasks that are either completed or false. The function populateTodoList calls the
// todos array. The purpose of this function is to create HTML elements for each todo item in the todos array and add them
//  to the DOM.



function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
   let input = document.getElementById("todoInput");
  if (input.value !== "") {
    populateTodoList([{ task: input.value, completed: false }]);
    input.value = "";
  } else return;
}

// This code defines a function named addNewTodo that is called when the "Add Todo" button is clicked. The function takes 
// an event parameter, which represents the event object that was triggered by the button click.
// event.preventDefault stops the browser from refreshing when the button is clicked. Then the variable let input use 
// .getElementById and store it in todoInput. The if ... else statement checks if the input value is an empty string. In its array
// it check if the string is not empty. If not the function populateTodoList in the array of array a new todo item is created.
// The task property checks the input value and the completed value is set to false. After creating the new todo item, the value 
// property of the input variable is set to an empty string to clear the input field. If the input is empty, the function 
// returns without doing anything.


const addBtn = document.getElementsByClassName("btn btn-primary mb-3")[0];
addBtn.addEventListener("click", addNewTodo);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
let list = document.getElementById("todo-list");
  const lis = document.querySelectorAll("li");
  for (let l of lis) {
    if (l.style.textDecoration === "line-through") {
      list.removeChild(l);
    }
  }
}
const delBtnComp = document.getElementById("remove-all-completed")


// The code assigns the DOM element that has a class of "btn btn-primary mb-3" to the constant variable addBtn. The addBTN use
// use .addEventListener so that when the button is clicked it triggers the addNewToDo function. It has a function that shall delete 
// all completed todos. Inside the brackets the variable let list use .getElementById function to check the todo list for completed
// todos. The variable const lis use the .querySelectorAll method to find all li element and them to lis. The for... if function
// to iterate through each li element and check if the 'textDecoration' style of the li element is line-through, which indicates it
// has been completed. A li element with this style is removed using .removeChild . The final line of code assigns the DOM element 
// with an ID of "remove-all-completed" to the constant variable delBtnComp.

