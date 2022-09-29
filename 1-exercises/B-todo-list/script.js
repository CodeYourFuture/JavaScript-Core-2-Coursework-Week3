function todoList(todos) {
  let unOrderedList = document.createElement("ul");

  todos.map((item) => {
    let list = document.createElement("li");
    // let todo = document.createElement("p");

    list.innerHTML = item.todo;

    list.className = "remove";
    unOrderedList.appendChild(list);
    list.addEventListener("click", lineThroughStyle);
    function lineThroughStyle() {
      if (list.className === "remove") {
        list.className = "add";
      } else {
        list.className = "remove";
      }
    }
  });
  
  let divEl = document.getElementById("content");
  divEl.appendChild(unOrderedList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
