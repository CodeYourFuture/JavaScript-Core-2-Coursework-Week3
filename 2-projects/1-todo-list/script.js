function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// todos.forEach((todo) => {




//   const spanElement = document.createElement("span");
//   spanElement.className = "badge bg-primary rounded-pill";


//   const iconCheck = document.createElement ("icon");
//   iconCheck.className = "fa fa-check";
//   spanElement.appendChild(iconCheck)


//   const iconTrash = document.createElement("icon");
//   iconCheck.className = "fa fa-trash";
//   spanElement.appendChild(iconTrash)


//   list.appendChild(listElement)
// });




// }
for ( let todo of todos){
const li =document.createElement("li");
li.innerHTML=todo.task;
list.appendChild(li);

const checkBotton =document.createElement("button");
checkBotton.innerHTML='<i class ="fa fa-check"></i>';
li.appendChild(checkBotton);
checkBotton.addEventListener("click" , () =>{
  if (li.style.textDecoration === "line-through"){
    li.style.textDecoration =" ";
  }else{
    li.style.textDecoration = "line-through";
  }
  todo.completed = !todo.completed;
});


const deleteButton = document.createElement("button");
deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
li.appendChild(deleteButton);
deleteButton.addEventListener("click" , () => {
list.removeChild(li);
});

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

let input = document.getElementById("todoInput");
if (input.value !== ""){
  populateTodoList([{task: input.value , completed:false }]);
  input.value ="";
}else return;
}

const addButton =document.getElementsByClassName("btn btn-primary mb-3")[0];
addButton.addEventListener("click" , addNewTodo);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const list = document.getElementById("todo-list");
  const lis = document.querySelectorAll ("li");
  for (let lii of lis){
    if(lii.style.textDecoration === "line-through"){
      list.removeChild(lii);
    }
  }

}
const deleteButtonComp = document.getElementById("remove-all-completed");
deleteButtonComp.addEventListener("click" , deleteAllCompletedTodos)