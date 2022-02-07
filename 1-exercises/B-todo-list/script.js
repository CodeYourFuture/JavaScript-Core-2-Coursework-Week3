function todoList(todos) {

  let content = document.getElementById("content");
 
// Create UL

  let toDoList = document.createElement("ul");
  content.appendChild(toDoList);

// loop through array ,add click strikethrough

  todos.map((toDoTask) => {
    let toDoListItem = document.createElement("li");
    toDoListItem.innerHTML = toDoTask.todo;
    toDoList.appendChild(toDoListItem)

    toDoListItem.addEventListener("click", () => {
      toDoListItem.style.textDecoration === "line-through" ? toDoListItem.removeAttribute("style")
      :toDoListItem.style.textDecoration = "line-through";
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