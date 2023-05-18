    
    function populateTodoList(todos) {
      const todoList = document.getElementById("todo-list");

      // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

      todos.forEach((todo) => {
        const todoItem = document.createElement("li");
        todoItem.innerText = todo;
        todoList.appendChild(todoItem);

        //  check button

          const check_btn = document.createElement("button");
          check_btn.classList.add("badge bg-primary rounded-pill");
          const tick_btn = document.createElement("i");
          tick_btn.classList.add("fa fa-check");
          check_btn.appendChild(tick_btn);
          todoItem.appendChild(check_btn)

        // check button

        //  delete button

          const delete_btn = document.createElement("button");
          delete_btn.classList.add("badge bg-primary rounded-pill");
          const bin_btn = document.createElement("i");
          bin_btn.classList.add("fa fa-trash");
          

        //  delete button

        const input_todo = document.getElementById("todoInput").value;
      });
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
