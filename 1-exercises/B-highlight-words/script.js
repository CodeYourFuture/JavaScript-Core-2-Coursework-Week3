function highlightWords(paragraph, colours) {
  
  // Write your code here...
const content = document.querySelector("#content");// select the div were we are creat element
// create elemente selector
const elementParagraph = document.createElement("p");

const  elementSelector = document.createElement ("selector");

let elParagraph = paragraph.split(" "); //words to array of text.
for (let i = 0; i < elParagraph.length; i++){ // loop in new array every word
  const elementSpan = document.createElement("span");
elementSpan.innerText = `${elParagraph[i]}`;//define word to span
elementSpan.addEventListener("click", function changeColor(){
  elementSpan.style.backgroundColor = elementSelector.value});
 
  elementParagraph.appendClild(span);
}
content.appendChild(elementParagraph);

for (let c = 0 ; c < colours.length; c++)// loop in coloers array 
  
{ const elementOption = document.createElement("option"); //create option element
elementOption.value = colours[c];
elementOption.text = colours[c];
elementSelector.value = colours[c];
}

elementSelector.appendChild(elementOption);
content.appendChild(elementSelector);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
