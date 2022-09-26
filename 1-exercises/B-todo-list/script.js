function todoList(todos) {
  // Write your code here...
  // Write your code here...
  const numberOfTodo = todos.length;
  const listTodo = document.createElement("ul");
  const content = document.getElementById("content");
  content.appendChild(listTodo);
  document.body.style.fontSize = "30px";
  for (let i = 0; i < numberOfTodo; i++) {
    let listMember = document.createElement("li");
    let textListMember = document.createTextNode(`${todos[i].todo} `);
    listMember.addEventListener("click", function () {
      if (listMember.style.textDecoration != "line-through") {
        listMember.style.textDecoration = "line-through";
      } else {
        listMember.style.textDecoration = "";
      }
      //Or
      //  if (listMember.className != "lineThroughStyle") {
      //    listMember.className = "lineThroughStyle";
      //  } else {
      //    listMember.className = "simpleStyle";
      //  }
    });
    listMember.appendChild(textListMember);
    listTodo.appendChild(listMember);
  }
}

function myFunction() {
  alert("YOU CLICKED ME!");
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
