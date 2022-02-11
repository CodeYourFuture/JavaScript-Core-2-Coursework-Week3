# ToDo-list

## Explanation

This is a super handy, super simple to do list.

You will be given a list of tasks which are "To Do". We call these tasks "ToDos"

Each item in the list should have 2 buttons:

- One to click when the ToDo has been completed - it will apply a line-through style to the text of the ToDo.
- A second to delete the ToDo. This could be used to delete completed ToDos from the list, or remove ToDos that we are no longer interested in doing.

We also want to be able to add ToDos to the list using an input field and a button. When ToDos are created this way they should be added to the list with the 2 above buttons.

More details for the implementation of this challenge can be found in `script.js`

## Installation

To view the website, open index.html in a browser.

## Example Solution

A basic example of this can website can be found here

https://chrisowen101.github.io/ToDoListSolution/

This covers only the basic tasks, not the advanced tasks.

## Instructions

The `populateTodoList()` function should iterate over the list of todos that we are given at the start, it should create a `<li>` for the todo along with some other stuff that you can find in index.html and below.

The items in the todo list are currently hard-coded into the HTML, refactor the code so that this function creates them and adds the following functionality to them:

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

EXTRA CHALLENGE: instead of displaying the date on the ToDo, implement a countdown of days left until the deadline. You can use the Javascript Date reference to accomplish this:
https://www.w3schools.com/jsref/jsref_obj_date.asp
