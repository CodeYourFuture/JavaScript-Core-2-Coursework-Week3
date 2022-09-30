function todoList(todos) {
  const content = document.querySelector("#content");
  let headingEl = document.createElement("h1");
  content.appendChild(headingEl);
  headingEl.innerText = "Todo list";

  todos.forEach(task => {
    
    let unorderedListEl = document.createElement("ul")
    let listItemEl = document.createElement("li");

    listItemEl.append(task.todo)
    content.appendChild(unorderedListEl);
    unorderedListEl.append(listItemEl);
    listItemEl.style.cursor = "pointer"

    listItemEl.addEventListener("click", function () {
      listItemEl.style.textDecoration = "line-through";
      listItemEl.addEventListener("click", function () {
        if(listItemEl.style.textDecoration = "line-through"){
          listItemEl.style.textDecoration = "none"
        } else {
          listItemEl.style.textDecoration = "line-through"
        }
      })
    })
  });

}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);