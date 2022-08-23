function todoList(todo) {
  // Write your code here...

  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  content.appendChild(unorderedList);
  todo.forEach((task) => {
    let list = document.createElement("li");
    list.innerHTML = task.todo;
    unorderedList.appendChild(list);
    list.addEventListener('click', () => {
      if (list.style.textDecoration === 'line-through') {
        list.style.textDecoration = '';
      } else { list.style.textDecoration = 'line-through' }
    })

  })
}


const todo = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todo);