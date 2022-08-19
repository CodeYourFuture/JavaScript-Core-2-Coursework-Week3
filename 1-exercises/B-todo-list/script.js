function todoList(todos) {
const container = document.getElementById('content');
const ul = document.createElement('ul');
container.appendChild(ul);

  todos.forEach(listItem => {
    const li = document.createElement('li');
    li.innerHTML = listItem.todo;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "";
      } else {
        li.style.textDecoration = "line-through";
      }
    } )

  });
  // for (const value in todos.todo){
  //  const li = document.createElement('li');
  //   ul.appendChild(li);

  //   todo.style.setProperty("text-decoration", "line-through");
  // }
  // Write your code here...
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);
