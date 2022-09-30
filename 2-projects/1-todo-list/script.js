let unorderedList = document.getElementById("todo-list");
function populateTodoList(todos) {
 todos.forEach(todo => {
    let list=document.createElement("li");
    let span=document.createElement("span");
    let icon_1=document.createElement("i");
    let icon_2=document.createElement("i");

   list.innerHTML=todo.task;
   list.classList.add(
     "list-group-item",
     "d-flex",
     "justify-content-between",
     "align-items-center"
   );
   span.classList.add("badge", "bg-primary", "rounded-pill");
   icon_1.classList.add("fa", "fa-check");
   icon_1.setAttribute("aria-hidden", true);
   icon_2.classList.add("fa", "fa-trash");
   icon_2.setAttribute("aria-hidden", true);

  unorderedList.appendChild(list);
  list.appendChild(span);
  span.append(icon_1, icon_2);

  icon_1.addEventListener("click", () => {
      if (list.classList.contains("complete")) {
        list.classList.remove("complete");
        todo.completed = false;
      } else {
        list.classList.add("complete");
        todo.completed = true;
      }
    });
    icon_2.addEventListener("click", () => {
      unorderedList.removeChild(list);
    });
  
 });