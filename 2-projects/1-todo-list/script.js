function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  let todoList = document.createElement('ul');
  list.appendChild(todoList)
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
/*
Each todo should have this HTML inside it:

```html
<span class="badge bg-primary rounded-pill">
  <i class="fa fa-check" aria-hidden="true"></i>
  <i class="fa fa-trash" aria-hidden="true"></i>
</span>
```

The first `<i>` tag needs an event listener that applies a line-through text-decoration styling to the text of the todo. It should remove the styling if it is clicked again.

The second `<i>` tag needs an event listener that deletes the parent `<li>` element from the `<ul>`.

## Advanced Challenge

### Mass delete of completed ToDos

Develop the ToDo list further and allow users to delete all completed ToDos.

Add a button that users can click that will iterate through the list of ToDos and then delete them only if they have been completed.

## Extra Advanced Challenge

### Set deadlines for ToDos

We want users to be able to set, and see, deadlines for their ToDos.

When creating ToDos we want the user to be able to use a datepicker input so they can see when they need to complete the ToDo. The date can be added to the ToDo in the list. If there is no date set when the ToDo is created then this can be skipped.

*/