function highlightWords(paragraph, colours) {
  const content = document.querySelector("#content"); //   selector to Div
  const paragraphs = document.createElement("p"); // create paragraphs tag
  const selecter = document.createElement("select"); //create select tag 
 let newparagraphs=paragraph.split(" ")// convert words  to array of text 
 
 for(let j=0;j< newparagraphs.length;j++){// loop in a new array every word 
   const span = document.createElement("span"); // create a new span tag for every word
   span.innerText=` ${newparagraphs[j]} `// set word to span 
   span.addEventListener("click", function chengColor() { // add eventlisener in click 
    span.style.backgroundColor=selecter.value // set color to word in click by select value 

   });

  paragraphs.appendChild(span);// span tag  it's child of p tag 
   
 }

 content.appendChild(paragraphs)// p tag it's child of div tag 
 
 
  for (let i = 0; i < colours.length; i++) // loop in coloers array 
  {
    const option = document.createElement("option"); //create option tag
    option.value = colours[i]; // set value to option tag from colors array
    option.text = colours[i]; // set text to option tag from colors array
    selecter.value = colours[i];// set select value to colors 
    selecter.appendChild(option); // set option tag it's child of select tag
  }
  content.appendChild(selecter); // set select tag it's child of div tag 
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
