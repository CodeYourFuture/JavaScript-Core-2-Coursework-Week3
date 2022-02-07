function todoList(todos) {
  let ul = document.createElement("ul");
  ul.setAttribute("id", "list");
  let heading = document.createElement("h1");
  heading.innerHTML = "Todo list";
  let content = document.querySelector("#content");
  content.appendChild(heading);
  for (todo of todos) {
    // console.log(todo);
    let li = document.createElement("li");
    li.setAttribute("class", "listItem");
    ul.appendChild(li);
    li.innerHTML = todo.todo; // show the list of items in objects

    // function created to put line through each item
    function setListDone(li) {
      li.addEventListener("click", function () {
        this.classList.toggle("done");
      });
    }

    setListDone(li); // Calling the function
  }
  content.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
