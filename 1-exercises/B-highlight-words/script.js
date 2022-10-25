function highlightWords(paragraph, colours) {
  // Write your code here...
  // - Create a `<p>` element.
  let paragraphEl = document.createElement("p");
  // - Create a `<select>` element.
  let selectEl = document.createElement("select");
  // Iterate over the options array and create an `<option>` element in the `<select>` for each element.
  // - You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here
  console.log(selectEl);
   let arrayOption = []; let theParagraph = paragraph.splice(" ");
  //    selectEl = document.appendChild(arrayOption)
  for (let i = 0; i < theParagraph.length; i++){
     arrayOption[i] = document.createElement("option")
    //  selectEl = document.appendChild(arrayOption[i]) // The appendChild is not working can give some hint here 
  }


  // arrayOption = document.createElement("option")
     console.log(arrayOption)
     //   Iterate over the array of words.
// - For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
     for (let i=0; i < theParagraph.length; i++){
      spanEl[i] = document.createElement("span")
      spanEl[i].innerText = theParagraph[i] + " ";
      paragraphEl.appendChild(spanEl[i])
     }
 
   
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
