function todoList(todos) {
  // Write your code here...
  let contentDiv = document.getElementById("content");
  let list = document.createElement("ul");
  contentDiv.appendChild(list);

  todos.map((item) => {
    // Creating elements
    let listItem = document.createElement("li");
    let todo = document.createElement("p");

    // Adding elements content
    todo.innerText = item.todo;

    // Appending elements
    list.appendChild(listItem);
    listItem.appendChild(todo);

    // Clicking events
    listItem.addEventListener("click", () => {
      listItem.className == "complete"
        ? listItem.classList.remove("complete")
        : listItem.classList.add("complete");
    });
  });
  //end of code
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);