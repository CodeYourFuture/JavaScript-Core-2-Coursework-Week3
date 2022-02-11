function todoList(todos) {
  // Write your code here...
  let contain = document.querySelectorAll("#content");
  let myList = document.createElement("ul");

  contain[0].appendChild(myList);
  todos.forEach((element) => {
    let myUList = document.createElement("li");
    myList.appendChild(myUList);
    let myText = document.createElement("p");
    myUList.appendChild(myText);
    myText.innerText = `${element.todo}`;
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
