const content = document.querySelector("#content");

const inputTag = document.createElement("input");
inputTag.type = "text";
const submitBtn = document.createElement("button");
submitBtn.innerText = "Submit"

submitBtn.type = "submit"
submitBtn.addEventListener("click", todoList)
content.appendChild(inputTag);
content.appendChild(submitBtn)
const ulTag = document.createElement("ul");
content.appendChild(ulTag);
ulTag.className = "ul"



function todoList(todos) {
  // Write your code here...


  let newLi = document.createElement("li");
  newLi.innerText = inputTag.value;
  inputTag.value.replace("  ", "");
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