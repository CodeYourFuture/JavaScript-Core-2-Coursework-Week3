function todoList(todos) {
  // Write your code here...
  for (let todoEl of todos) {
  
  let content = document.querySelector('#content');
  const todoList = document.createElement("ul");
  content.appendChild(todoList);

  const todoListItem = document.createElement("li");
  todoList.appendChild(todoListItem);

  const paragraph = document.createElement("p");
  paragraph.innerText = `${todoEl.todo}`;
  todoListItem.appendChild(paragraph);
  paragraph.style.cursor = "pointer";  
  
  const clickItem = function() {
    todoListItem.style.textDecoration === "" ?
    todoListItem.style.textDecoration = "line-through":
    todoListItem.style.textDecoration = "";        
  };

  todoListItem.addEventListener("click", clickItem);
  };
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);