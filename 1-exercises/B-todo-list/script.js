function todoList(todos) {
 let unOrderedList=document.createElement("ul");
 todos.forEach(object => {
  let list=document.createElement("li");
  list.innerHTML=object.todo;
  list.className="romove"
  unOrderedList.appendChild(list);
  list.addEventListener("click",lineThroughStyle)
   function lineThroughStyle(){
  if(list.className==="remove"){
   list.className="add"
  }else{
    list.className="remove"
  }
}
 });
 let divEl=document.getElementById("content")
 divEl.appendChild(unOrderedList)

}


const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);