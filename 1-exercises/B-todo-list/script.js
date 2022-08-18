function todoList(todos) {
  // Write your code here...
  let contentEl = document.getElementById("content");
  let unorderedListEl = document.createElement("ul");
  contentEl.appendChild(unorderedListEl);

  todos.forEach((item) => {
    // console.log(item.todo);

    let listEl = document.createElement("li");
    // let paraEl = document.createElement("p");
    // listEl.appendChild(paraEl);
    unorderedListEl.appendChild(listEl);
    listEl.innerText = item.todo;
  });
}

function markingList() {
  console.log((listEl.style.textDecoration = "line-through"));
}

function markAsDone() {
  console.log(markAsDone.addEventlistener("click", markingList));
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
