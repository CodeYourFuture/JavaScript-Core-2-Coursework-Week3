function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
 todos.forEach((todo) => {

    //creating elements
    let myList = createElement("li");
    let span = createElement("span");
    let icon1 = createElement("i");
    icon1.setAttribute = ("aria-hidden",true)
    let icon2 = createElement("i");
    icon2.setAttribute = ("aria-hidden", true)

    //add text-content and classname
    myList.innerText  = todo.task;
    myList.classList.add = "list-group-item d-flex justify-content-between align-items-center";
    span.classList.add = "badge bg-primary rounded-pill";
    icon1.classList.add = "fa fa-check"
    icon2.classList.add = "fa fa-trash" 

    //appending elements
    list.appendChild(myList)
    myList.appendChild(span)
    span.appendChild(icon1, icon2)
    // add  event listerner
    icon1.addEventListener("click", ()=> {
    if (myList.classList.contains("complete")){
      myList.classList.remove("complete");
      todo.completed = false;
    } else {
      myList.classList.add("complete");
      todo.completed = true;
    }
  }),
  icon2.addEventListener("click", ()=> {
    list.removeChild(myList)
  })

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
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
// }

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  let items = document.querySelectorAll("li")
  for (let i of items) {
    if (i.classList.contains("complete")) {
      list.removeChild(i)
    }
  }
}
