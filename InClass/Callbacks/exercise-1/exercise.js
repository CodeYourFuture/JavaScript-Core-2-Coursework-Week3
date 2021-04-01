/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
//<<<<<<< main

let colorBackground = document.getElementById("main")[0];

function changeBackground1() {
  setTimeout(function() { main.style.backgroundColor = "red"}, 5001)
}
changeBackground1();

let colorArray = ["gold", "crimson", "turquoise", "magenta"]

function changeBackground2 () {
  let x = 0
  setInterval(() => {
    if (x == colorArray.length) x = 0;
    main.style.backgroundColor = colorArray[x];
    x++
  }, 5000);
}

changeBackground2();
//=======
//>>>>>>> main
