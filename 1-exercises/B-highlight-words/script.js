/*
- Create a `<p>` element.
- Create a `<select>` element.
- Iterate over the options array and create an `<option>` element in the `<select>` for each element.
- You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
- Iterate over the array of words.
- For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
- Each `<span>` should have an eventListener that will listen for clicks.

- When clicked, we need to check the value of the `<select>` element using the `.value` property.
- We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
- All of your HTML should go inside the `<div>` with the id **"content"**.
*/


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

function changeColour (){
  let colourBox = document.getElementById("colourSelect");
  let chosenColour = colourBox.value;
  if (chosenColour === "none") {
  this.style.backgroundColor = "";
  }
  else {
  this.style.backgroundColor = chosenColour;
}
}
function highlightWords(paragraph, colours) {
  let pElement = document.createElement("p");
  let arrayOfWords = paragraph.split(" ");
  arrayOfWords.forEach((word)=>{
    let spanElement = document.createElement("span");
    spanElement.textContent = word + " ";
    spanElement.addEventListener("click", changeColour);
    pElement.appendChild(spanElement);
  })
  let contentDiv = document.querySelector("#content");
  contentDiv.appendChild(pElement);
  let selectElement = document.createElement("select");
  selectElement.id = "colourSelect";
  
  let optionElement = document.createElement("option");
  optionElement.appendChild(document.createTextNode("Please choose a colour"));
  selectElement.appendChild(optionElement);
  colours.forEach((colour) => {
   let optionElement = document.createElement("option");
   optionElement.value = colour;
   optionElement.innerText = colour.charAt(0).toUpperCase() + colour.substring(1);
  selectElement.appendChild(optionElement);
  })
  
  console.log(selectElement);
  contentDiv.appendChild(selectElement);
}
highlightWords(paragraph, colours);


