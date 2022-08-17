const content = document.querySelector("#content");

const input_tag = document.createElement("input");
input_tag.type = "text";
const submit_btn = document.createElement("button");
submit_btn.innerText = "Submit"

submit_btn.type = "submit"
submit_btn.addEventListener("click", todoList)
content.appendChild(input_tag);
content.appendChild(submit_btn)
const ulTag = document.createElement("ul");
content.appendChild(ulTag);
ulTag.className = "ul"



function todoList(todos) {
  // Write your code here...


  let newLi = document.createElement("li");
  newLi.innerText = input_tag.value;
  input_tag.value.replace("  ", "");
  newLi.addEventListener("click", () => {
    newLi.classList.toggle("checked")
  })
  ulTag.appendChild(newLi);

}





const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);

todos.forEach(item => {
  let liTag = document.createElement("li");
  liTag.innerText = item.todo;
  liTag.addEventListener("click", () => {
    liTag.classList.toggle("checked")
  })
  ulTag.appendChild(liTag);
});