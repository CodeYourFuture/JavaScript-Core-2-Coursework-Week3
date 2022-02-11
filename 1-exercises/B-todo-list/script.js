const content = document.querySelector("#content");

function todoList(todos) {
  //create ul element with class name
  const unorderedList = document.createElement("ul");
  unorderedList.classList.add("todo-tasks");
  
  todos.forEach(task => {
    //create li element with class name
    const listElement = document.createElement("li");
    listElement.classList.add("task");
    listElement.innerHTML = task.todo;
    

    //add event listener to add/remove line through text on click 
    listElement.addEventListener('click', (e) => {
      if (listElement.style.textDecoration === "") {
        e.target.closest("li").style.textDecoration = "line-through";
      } else {
        e.target.closest("li").style.textDecoration = "";
      }
    }); 
    
    unorderedList.appendChild(listElement);
    
  });
  
  content.appendChild(unorderedList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);