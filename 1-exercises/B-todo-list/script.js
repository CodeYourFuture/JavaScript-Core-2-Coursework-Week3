function todoList(todos) {
  // Write your code here... 
  let divContent = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  divContent.appendChild(ulElement);

  for (let obj of todos){
    let liElement = document.createElement("li");
    
    liElement.addEventListener("click", () => {
      if(!liElement.classList.contains("line-through")){
        liElement.classList.add("line-through")
      } else {
         liElement.classList.remove("line-through");
      }
     
    });

    let text = document.createTextNode(obj.todo);
    liElement.appendChild(text);
    ulElement.appendChild(liElement);
  }


}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);