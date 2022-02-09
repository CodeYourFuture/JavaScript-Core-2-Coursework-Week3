function todoList(todos) {
  // Write your code here...
  let content = document.getElementById("content");
  let ulElement = document.createElement("ul");

  content.appendChild(ulElement);
  ulElement.className = "toDoCards";

  todos.map((item, index) => {
    let liElement = document.createElement("li");
    let button = document.createElement("button");
    let div = document.createElement("div");
    ulElement.append(div);
    div.classList = "todoParent";
    div.appendChild(liElement);
    div.appendChild(button);
    button.innerText = "Done!";
    liElement.innerText = item.todo;
    liElement.className = "todo-item";
    button.className = "clickButton";
    button.addEventListener("click", (e) => {
      e.target.parentNode.firstChild.className = "done";
    });
  });
  // document.getElementById;
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "prepare food" },
  { todo: "do ironing" },
  { todo: "go to the park with baby" },
];

todoList(todos);
