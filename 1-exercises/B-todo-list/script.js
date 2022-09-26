function todoList(todos) {
  // Appending unordered list to the content div
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

    // Click events
    listItem.addEventListener("click", () => {
      listItem.className == "complete"
        ? listItem.classList.remove("complete")
        : listItem.classList.add("complete");
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
