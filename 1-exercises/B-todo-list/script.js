function todoList(todos) {
   
   let contentDiv = document.getElementById("content");
   let list = document.createElement("ul");
   contentDiv.appendChild(list);
 
   todos.map((item) => {
     let listItem = document.createElement("li");
     let todo = document.createElement("p");
 
    
     todo.innerText = item.todo;
 
     list.appendChild(listItem);
     listItem.appendChild(todo);
 
     listItem.addEventListener("click", () => {
       listItem.className == "complete"
         ? listItem.classList.remove("complete")
         : listItem.classList.add("complete");
     });
   });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);