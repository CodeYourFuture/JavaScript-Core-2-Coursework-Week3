// function highlightWords(paragraph, colours) {
//   // Write your code here...
//   let divContent = document.querySelector("#content");
//   let paragraphEl = document.createElement("p");
//   let selectEl = document.createElement("select");
 

//   for(let colour of colours){
//     let selectColour = document.createTextNode(colour);
//     let optionEl = document.createElement("option");
//     optionEl.appendChild(selectColour);
//     selectEl.appendChild(optionEl);
//   }
//  divContent.appendChild(selectEl);

//   let arrParagraph = paragraph.split(" ");
//   for(let word of arrParagraph){
//     let spanEl = document.createElement("span");
//     spanEl.innerText = word + " ";
//     spanEl.addEventListener("click", () => {
//       let optionValue = selectEl.value;
//       if (optionValue === 'none') {
//         spanEl.style.backgroundColor = '';
//       } else {
//         spanEl.style.backgroundColor = optionValue;
//       }
//      });
//     paragraphEl.appendChild(spanEl);
//   }
  
//   divContent.appendChild(paragraphEl);
// }

const whereToAttach = document.querySelector("#content");
console.log(whereToAttach);

function highlightWords(paragraph, options) {
  // creating our elements
  const paragraphEl = document.createElement("p");
  const selectEl = document.createElement("select");

  // this is where we amend those elements
  options.forEach((colour) => {
    // create the element
    const optionEl = document.createElement("option");

    // amend the element as you see fit
    optionEl.value = colour;
    optionEl.innerText = colour;

    // add the element to the select menu
    selectEl.appendChild(optionEl);
  });

  paragraph.split(" ").forEach((word) => {
    // create the element
    const spanEl = document.createElement("span");
   

    // amend the element as you see fit
    spanEl.innerText = word + " ";
    spanEl.addEventListener("click", () => {
      const selectedColour = selectEl.value;

      if (selectedColour === "none") {
        spanEl.style.backgroundColor = "";
      } else {
        spanEl.style.backgroundColor = selectedColour;
      }
    });

    // add the element to the paragraph tag
    paragraphEl.appendChild(spanEl);
  });

  // add those elements to the page
  whereToAttach.appendChild(selectEl);
  whereToAttach.appendChild(paragraphEl);
}

 

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
