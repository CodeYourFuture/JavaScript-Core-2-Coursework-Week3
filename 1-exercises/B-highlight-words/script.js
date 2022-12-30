function highlightWords(paragraph, colours) {
// Write your code here...
// - Create a `<p>` element.
// - Create a `<select>` element.
  let p = document.createElement('p')
  let select = document.createElement('select')
  let content = document.getElementById('content')

// - Iterate over the options array and create an `<option>` element in the `<select>` for each element.
for (let color of colours){
  let option = document.createElement('option')
  option.innerText = color
  select.appendChild(option)
}
// You'll need to turn the paragraph into an array to iterate over it. 
// You can use the `.split(" ")` method here.
let splittedWordParagraph = paragraph.split(' ')

// - Iterate over the array of words.
// - For each word, create a `<span>` element and set the innerText to the word, 
// plus a space - " ". Add this to the `<p>`.

// - Each `<span>` should have an eventListener that will listen for clicks.
// - When clicked, we need to check the value of the `<select>` element using the `.value` property.
// - We can then update the `background-color` property of the `<span>` with the value of the select - 
//   remember that the value "none" is a special case and we need to be handled differently.

for (let word of splittedWordParagraph){
  let highligtWord = document.createElement('span')
 
  highligtWord.addEventListener("click", changeColor)
  function changeColor(event){
  let currentColor = document.querySelector("select").value

  // If 'none' is selected in the dropdown, then no highlighting should be applied to the words, 
  // or highlighting should be removed if the clicked word is already highlighted.

  if(currentColor == 'none') {
    event.target.style.backgroundColor = 'white'
  }
  else {event.target.style.backgroundColor = currentColor}
}
  highligtWord.innerText = word + " "
  p.appendChild(highligtWord)
}

// - All of your HTML should go inside the `<div>` with the id **"content"**.
 content.appendChild(p)
 content.appendChild(select)
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
