function todoList(todos) {
  
  const ulElement = document.createElement("ul");
  // create a ul element

  todos.forEach(element => {
    // loop through the todos array
    const liElement = document.createElement("li");
    liElement.className = "strikethrough-false";
    liElement.textContent = element.todo;
    liElement.addEventListener("click", strikethroughToggle);
    ulElement.appendChild(liElement);
    // create the li element
    // give it a class
    // give it textContent
    // add an eventListener, which on click, runs the "strikeThroughToggle" function
  })

  content.appendChild(ulElement);
  // append the ul element to the div element "content"
}

function strikethroughToggle(event) {
  if (event.target.classList[0] === "strikethrough-false") {
    event.target.classList.replace("strikethrough-false", "strikethrough-true");
  } else if (event.target.classList[0] === "strikethrough-true") {
    event.target.classList.replace("strikethrough-true", "strikethrough-false");
  }
  // check the first element in the classList (i know i can do this with className, but i want to practice using classList)
  // and replace its value with the opposite
}

const todos = [
  { todo: "wash the dishes 😰🧽" },
  { todo: "walk the cat 🤪🐈" },
  { todo: "learn javascript 🤓💻" },
  { todo: "go shopping 🤤🍗" }
];

const content = document.getElementById("content");
// define the div element "content"

const h1Element = document.createElement("h1");
h1Element.textContent = "🗒️To Do List ";
content.appendChild(h1Element);
// create the h1 element
// give it textContent
// append the h1 element to the div element "content"

todoList(todos);