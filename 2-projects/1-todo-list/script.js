let list = document.querySelector("#todo-list");
let button = document.querySelector("button")
let inputList = document.querySelector("#todoInput")
let removeButton = document.querySelector("#remove-all-completed")

function populateTodoList(todos) {

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  for (let task of todos){
    createNewElement(task.task)
  }
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


function createNewElement(innerText){
  let newList = document.createElement("li")
    newList.classList.add("background-re")
    newList.innerText = innerText

    let span = document.createElement("span")
    span.className = "badge bg-primary rounded-pill"

    let iElement = document.createElement("i")
    
    iElement.className = "fa fa-check"
    iElement.ariaHidden = "true"
    iElement.addEventListener("click", function(){
      newList.classList.toggle("line")
    });

    let iElementSecond = document.createElement("i")
    iElementSecond.className = "fa fa-trash"
    iElementSecond.ariaHidden = "true"

    iElementSecond.addEventListener("click", function(){
      newList.remove()
    })
    list.appendChild(newList)
    newList.appendChild(span)
    span.appendChild(iElement)
    span.appendChild(iElementSecond)
}

 

populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
    // event.preventDefolt()
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
      
    event.preventDefault();
    if (inputList.value !== ""){
            createNewElement(inputList.value)
    }
}

button.addEventListener("click", addNewTodo)



// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  // Write your code here...
    event.preventDefault() ; 
    console.log(list)
    for(let li of list.children) {
      // console.log(list.children, li)
      if (li.classList.contains("line")){
       console.log(li)
        list.removeChild(li);   
      }
    }  
}

removeButton.addEventListener("click", deleteAllCompletedTodos)


