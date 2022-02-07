function todoList(todos) {
  let newDiv = document.getElementById("content");
  let newList = document.createElement("ul");
  newDiv.appendChild(newList);

  let newLi = [];
  let newParagraph = [];

  for (let i in todos) {
    newLi[i] = document.createElement("li");
    newParagraph[i] = document.createElement("p");
    newParagraph[i].innerText = Object.values(todos[i]);
    newList.appendChild(newLi[i]);
    newLi[i].appendChild(newParagraph[i]);
    newLi[i].addEventListener("click", () => {
      newLi[i].style.textDecoration = "line-through";
    });
  }
}
const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
