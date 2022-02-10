function todoList(todos) {
  const ourUnorderedList = document.createElement("ul");
  todos.forEach((item) => {
    const ourListItem = document.createElement("li");
    ourListItem.innerText = item.todo;
    ourUnorderedList.appendChild(ourListItem);
    ourListItem.addEventListener("click", () => {
      if (ourListItem.style.textDecoration === "line-through") {
        ourListItem.style.textDecoration = "none";
      } else {
        ourListItem.style.textDecoration = "line-through";
      }
    });
  });
  const whereToAttach = document.querySelector("#content");
  whereToAttach.appendChild(ourUnorderedList);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
