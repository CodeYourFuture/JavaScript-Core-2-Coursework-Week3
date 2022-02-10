function todoList(todos) {
  // Write your code here...
  div = document.querySelector('#content');
  unorderedList = document.createElement('ul');
  console.log(unorderedList);
  result = todos.forEach((value => {
    let listTag = document.createElement("li")
    listTag.inner
    //return(`<li>${value.todo}</li>`)
  }))
  div.append(unorderedList);
  unorderedList.innerHTML = (result);

  let allList = document.querySelectorAll('li');
  allList.forEach(strikeList => {
    strikeList.addEventListener("click", ()=>{
      //strikeList.classList.toggle('strike');
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];

todoList(todos);