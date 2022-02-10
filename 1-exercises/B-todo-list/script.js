function todoList(todos) {
  let ulEl = document.createElement("ulEl");
  ulEl.setAttribute("id", "list");
  let headingEl = document.createElement("h1");
  headingEl.innerHTML = "Todo list";
  let content = document.querySelector("#content");
  content.appendChild(headingEl);
  for (task of todos) {
    // console.log(todo);
    let liEl = document.createElement("liEl");
    liEl.setAttribute("class", "listItem");
    ulEl.appendChild(liEl);
    liEl.innerHTML = task.todo; // show the list of items in objects

    // function created to put line through each item
    function setListDone(liEl) {
      liEl.addEventListener("click", function () {
        this.classList.toggle("done");
      });
    }

    setListDone(liEl); // Calling the function
  }
  content.appendChild(ulEl);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
