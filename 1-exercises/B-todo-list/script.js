function todoList(todos) {
  

  let content = document.getElementById("content");
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);

  for (let el of todos) {
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = `todo : ${el.todo}`;
    liElement.addEventListener( "click", () => {
      if( liElement.style.textDecoration === "line-through") {
        liElement.style.textDecoration = "none";
      } else {
        liElement.style.textDecoration = "line-through";
      } 
    })

  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);