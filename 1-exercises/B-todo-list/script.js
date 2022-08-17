function todoList(todos) {
 let contents = document.querySelector("#content");
 unorderedList = document.createElement("ul");
contents.append(unorderedList);
todos.forEach(tasks => {
  let list = document.createElement("li");
  list.innerText = tasks.todo;
  unorderedList.append(list);
  list.addEventListener("click", () => {
    if( list.style.textDecorationLine === "line-through"){
      return list.style.textDecorationLine = "none";
    } else {
      return list.style.textDecorationLine = "line-through";
    }
  })
})

}
/*
- You should use an `<ul>` for the list and `<li>` tags for the contents.
- Each todo should have an event listener for when they are clicked.
- The event listener should add the line-through style to the todo.
- The event listener should also remove the line-through style conditionally by checking if the style is already applied. Hint: try adding a CSS classe to styles.css for this.
- All of your HTML should go inside the `<div>` with the id **"content"**.  */
const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);