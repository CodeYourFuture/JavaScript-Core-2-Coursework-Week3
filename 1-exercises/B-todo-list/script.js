/*
# Todo List

The function **todoList** takes an array of todo objects:

'''js
const todos = [{ todo: "wash the dishes" }, { todo: "walk the dog" }];
'''

We want to render a list of todos on the page. 
When we click on an item we want a line-through style to be added to it to show that the todo has been completed. 
If we decide we haven't actually finished the todo yet, then we should be able to click it again 
to remove the line-through styling.

## Exercise

- You should use an '<ul>' for the list and '<li>' tags for the contents.
- Each todo should have an event listener for when they are clicked.
- The event listener should add the line-through style to the todo.
- The event listener should also remove the line-through style conditionally by checking if the style is already applied. 
  Hint: try adding a CSS class to styles.css for this.
- All of your HTML should go inside the '<div>' with the id "content".
*/

function todoList(todos) {
  let theContent = document.querySelector("#content") // FETCH THE ELEMENT THAT NEEDS MODIFYING
  // I decided to increase the font size
  theContent.style.fontSize = "2.5em";
  let listView=document.createElement('ul');
  for (let task of todos) {
      // Use '<li>' tags for the contents.
      let listViewItem=document.createElement('li');
      // Render the text 'as is' without strike-through
      listViewItem.innerText = task.todo;
      listViewItem.classList.add("normalText")
      // Each todo should have an event listener for when they are clicked.
      listViewItem.addEventListener("click", strikeFunction);
      // Append to the list
      listView.appendChild(listViewItem);
  }

  //  The list is now complete
  //  Append it to the page
      theContent.appendChild(listView);
}

// This function is executed when the text is clicked
function strikeFunction() {
     if (this.className === "normalText")
     {
            // APPLY STRIKE-THROUGH
            this.classList.remove("normalText") 
            this.classList.add("strikeThrough")
     }

     else
     {
            // REMOVE STRIKE-THROUGH
            this.classList.remove("strikeThrough") 
            this.classList.add("normalText")
     }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" }
];



todoList(todos);
