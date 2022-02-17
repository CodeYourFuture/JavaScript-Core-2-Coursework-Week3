function todoList(array) {
  let divEl = document.querySelector("#content");
  let headingEl = document.createElement("h1");
  headingEl.innerText = "List of things I still need to do: ";
  divEl.appendChild(headingEl);
  let ul = document.createElement("ul");
  headingEl.appendChild(ul);
  array.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element.todo;
    ul.appendChild(li);
    li.addEventListener("click", () => {
      li.style.textDecoration === "line-through"
        ? (li.style.textDecoration = "")
        : (li.style.textDecoration = "line-through");
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);
