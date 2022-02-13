function todoList(todos) {
 
  let ul = document.createElement("ul");               //created a ul element and stored it in a variable

 
  for(let i = 0; i < todos.length; i++) {               // looped through all items in todos
        let li = document.createElement("li");          //created a li element and stored it in a variable
        li.innerText = todos[i].todo                    //asigned li.innerText to each item in the array
        ul.append(li)                                   //appended ul to li
        myDiv = document.querySelector('#content')      //selected provided div to pass the content of the li
        myDiv.appendChild(ul)                           //now visible in browser
        li.addEventListener("click", () => {
           li.style.textDecoration = "line-through"})                         

 }

}


















const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);