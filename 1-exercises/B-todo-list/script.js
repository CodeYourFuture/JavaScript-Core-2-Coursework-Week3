 
  const contentDiv = document.querySelector("#content")
  function todoList(todos) {
    let list = document.createElement("ol");
    contentDiv.appendChild(list);
    todos.forEach(arrayElement => {
       let listItem = document.createElement("li");
       list.appendChild(listItem);
       listItem.innerText = arrayElement.todo;
       listItem.addEventListener("click", () => {
       listItem.style.textDecoration === "line-through" ?  listItem.style.textDecoration = "":
       listItem.style.textDecoration = "line-through";
      });
    });
  }

  


// todoList(todos);
const todos = [
    { todo: "wash the dishes" },
    { todo: "walk the dog" },
    { todo: "learn javascript" },
    { todo: "go shopping" }
  ];

  todoList(todos);

 