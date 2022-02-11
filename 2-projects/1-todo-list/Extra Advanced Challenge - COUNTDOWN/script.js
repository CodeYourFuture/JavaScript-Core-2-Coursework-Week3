/*
This is a super handy, super simple to do list.

## Extra Advanced Challenge ##
### Set deadlines for ToDos ###

EXTRA CHALLENGE: instead of displaying the date on the ToDo, implement a countdown of days left until the deadline.
*/

// This function is executed when the text is clicked
function checkFunction() {

  let getParent = this.parentElement // this is the SPAN
  getParent = getParent.parentElement // this is the LI
  
  if (getParent.classList.contains("normalText"))
     {
            // APPLY STRIKE-THROUGH
            getParent.classList.remove("normalText") 
            getParent.classList.add("strikeThrough")
     }

     else
     {
            // REMOVE STRIKE-THROUGH
            getParent.classList.remove("strikeThrough") 
            getParent.classList.add("normalText")
     }
}

function trashFunction() {
  this.removeEventListener("click", checkFunction);
  let getParent = this.parentElement; // this is the SPAN
  // Have to remove the other EventListener
  let getChild = getParent.firstChild;
  getChild.removeEventListener("click", checkFunction);
  
  // Now remove the element
  getParent = getParent.parentElement; // this is the LI  
  getParent.remove(); // remove entire element
}

// Taken from https://stackoverflow.com/questions/1968167/difference-between-dates-in-javascript/53092438#53092438 
const DateDiff = function(type, start, end) {

    let years = end.getFullYear() - start.getFullYear(),
        monthsStart = start.getMonth(),
        monthsEnd = end.getMonth();

    let returns = -1;

    switch(type){
        case 'm': case 'mm': case 'month': case 'months':
            returns = ( ( ( years * 12 ) - ( 12 - monthsEnd ) ) + ( 12 - monthsStart ) );
            break;
        case 'y': case 'yy': case 'year': case 'years':
            returns = years;
            break;
        case 'd': case 'dd': case 'day': case 'days':
            returns = ( ( end - start ) / ( 1000 * 60 * 60 * 24 ) );
            break;
    }

    return Math.round(returns); // 'round()' needed to ensure correct whole number

}

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, 
  // all todos should display inside the "todo-list" element.
  let todoClassesToAdd = "list-group-item d-flex justify-content-between align-items-center".split(' ');
  // i.e. ['list-group-item' 'd-flex' ....]
  let spanClassesToAdd = "badge bg-primary rounded-pill".split(' ');

  for (eachTodo of todos) {
        let listViewItem=document.createElement('li');
        // Apply the necessary classes
        listViewItem.classList.add(...todoClassesToAdd);

        listViewItem.innerText = eachTodo.task;
        if (!eachTodo.completed)
                // Render the text 'as is' without strike-through
                listViewItem.classList.add("normalText")
        else
                // Completed, so strike-through
                listViewItem.classList.add("strikeThrough");

/*
ADD THE FOLLOWING
                <span class="badge bg-primary rounded-pill">
                  <!-- each of these <i> tags will need an event listener when we create them in Javascript -->
                  <i class="fa fa-check" aria-hidden="true"></i>
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
*/

        let myNewSpan = document.createElement("span");
        // Apply the necessary classes
        myNewSpan.classList.add(...spanClassesToAdd);       

        let myNewIcon = document.createElement("i");
        // Apply the necessary classes
        myNewIcon.classList.add("fa","fa-check");
        myNewIcon.ariaHidden=true;
        // Each 'fa-check <i>' should have an eventListener that will listen for clicks. 
        myNewIcon.addEventListener("click", checkFunction);
        // Add this to the '<span>'.
        myNewSpan.appendChild(myNewIcon);

        myNewIcon = document.createElement("i");
        // Apply the necessary classes
        myNewIcon.classList.add("fa","fa-trash");
        myNewIcon.ariaHidden=true;
        // In my opinion, these icons are too close together - so I added some padding
        myNewIcon.style.paddingLeft="1em";   

        // Each 'fa-trash <i>' should have an eventListener that will listen for clicks. 
        myNewIcon.addEventListener("click", trashFunction);
        // Add this to the '<span>'.
        myNewSpan.appendChild(myNewIcon);

        // Add this to the '<li>'.
        listViewItem.appendChild(myNewSpan);

        // Append to the list
        list.appendChild(listViewItem);
  }

}


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. 
// These new todos will need the completed and delete buttons adding like normal.


/*
the parsed value of a input date is always formatted yyyy-mm-dd.
dateControl.value = '2017-06-01';

console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
*/


function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newToDoInput = document.getElementById("todoInput")
  let inputText = newToDoInput.value.trim();
  newToDoInput.value = "" // reset the input field to blank 
  let theDateInfo = document.getElementById("taskdate");
  if (inputText) // definitely non-null - the default due date is tomorrow
  {
     // Attach the date to the 'todo'
    let newTodoObj = {task: inputText, completed: false};
    newTodoObj.duedate = theDateInfo.valueAsNumber;
    
    // In how many days is it due?
    // To determine this work out the difference in days

    let enteredDate = new Date(theDateInfo.value); // fetch the date YYYY-MM-DD
    enteredDate.setHours(0,0,0,0) // for the purpose of the subtraction, set it to midnight
    let daysDiff = DateDiff('dd', todaysMidnight, enteredDate); // SUBTRACT from today's date
    if (daysDiff > 1)
        newTodoObj.task += " - Due in " + daysDiff + " days"
    else
        newTodoObj.task += " - Due tomorrow";
        
    populateTodoList([newTodoObj]) // Add new Todo Object
    theDateInfo.value = tomorrowsYYYYMMDD; // Reset to tomorrow's date      
    return
  }

  // null todo input
  alert("Please enter a todo to associate with the date")
  theDateInfo.value = tomorrowsYYYYMMDD; // Reset to tomorrow's date      
}



// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones 
// (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
     let anIcon,listUL,items,eachLI_Node,theSpan,element;
     event.preventDefault();
     listUL = document.getElementById("todo-list");
     items = listUL.getElementsByTagName("li");
   
     for (let i = 0; i < items.length; i++ ){
          eachLI_Node = items[i];
          if (eachLI_Node.classList.contains("strikeThrough")) {
          // 'strike-through' styling as been applied therefore remove it
          // however remove any Event Listeners first  
             theSpan = eachLI_Node.getElementsByTagName("span");
             if (theSpan) { // definitely exists
                            element = theSpan[0]
                            // each child is either the fa-check or the fa-trash
                            // remove the EventListener then the child in order for this loop to find the next child
                            while (element.firstChild) {
                                    element.firstChild.removeEventListener("click", checkFunction);
                                    element.firstChild.removeEventListener("click", trashFunction);
                                    element.removeChild(element.firstChild);
                          }
                                                              }
             // Now remove the actual list item               
             eachLI_Node.remove() 

 // I cannot fully explain why:
 // When the remove() function is removed it appears that 'items' list is adjusted after each removal 
 // UNLIKE JavaScript arrays
 // So i when incremented will SKIP the next item
 // Decrement i to prevent this

            --i

                                                                  }            
                                                }

}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


populateTodoList(todos);
const todaysDate = new Date(); // Current Date and Time
// A Number, representing the number of milliseconds between the date object and midnight January 1, 1970 UTC

// For this program, the earliest date that the user can enter is 'TOMORROW's' date
// const todaysDateAsNumber = todaysDate.valueOf(); 

const todaysMidnight = todaysDate;
todaysMidnight .setHours(0,0,0,0) // for subtraction purposes, use midnight  00:00:00 

const tomorrowsDate = new Date(todaysDate)
tomorrowsDate.setDate(tomorrowsDate.getDate() + 1) // advance one day to determine TOMORROW
tomorrowsDate.setHours(0,0,0,0) 

// Tomorrow's date is the default due date
const tomorrowsMonth = (tomorrowsDate.getMonth()+1).toString().padStart(2, '0')
const tomorrowsDay = tomorrowsDate.getDate().toString().padStart(2, '0')

const tomorrowsYYYYMMDD = `${tomorrowsDate.getFullYear()}-${tomorrowsMonth}-${tomorrowsDay}`
const tomorrowAsNumber = tomorrowsDate.valueOf(); 

let theDateInfo = document.getElementById("taskdate");
theDateInfo.setAttribute("value", tomorrowsYYYYMMDD); // Tomorrow's Date
theDateInfo.setAttribute("min", tomorrowsYYYYMMDD);   // Used as the minimum value



