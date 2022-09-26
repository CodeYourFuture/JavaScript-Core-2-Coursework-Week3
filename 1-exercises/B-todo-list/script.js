function todoList(todos)
{
  let content = document.getElementById("content");
  let uList = document.createElement("ul");
  content.appendChild(uList);
  
  todos.forEach(todo =>
  {
    let list = document.createElement("li");
    list.textContent = todo.todo;
    uList.appendChild(list);

    list.addEventListener("click", () =>
    {
      if (list.style.textDecoration === "line-through")
      {
        list.style.textDecoration = "none";
      }
      
      else
      {
        list.style.textDecoration = "line-through";
      }
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
