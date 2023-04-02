function highlightWords(paragraph, colours) {
/*   // Write your code here...
  const result = document.getElementById("content");
  const arrayOfParagraph = paragraph.split(" ");
  //console.log(arrayOfParagraph);
  let pEl = document.createElement("p");
  let selectEl = document.createElement("select");

  for (let i = 0; i < colours.length; i++) {
    let optionEl = document.createElement("option");
    optionEl.innerText = colours[i];
    selectEl.appendChild(optionEl);
  }
  console.log(selectEl.value);
  result.appendChild(selectEl);

  arrayOfParagraph.forEach((element) => {
    let span = document.createElement("span");
    span.innerText = element + " ";
   // span = document.addEventListener("click", cahngeColor);
    pEl.append(span);
    //console.log(span);
  }); */
  //console.log(pEl.innerHTML);
  ////////////////////gpt
    const contentDiv = document.getElementById("content");

    // Create the paragraph element
    const pElement = document.createElement("p");

    // Create the select element
    const selectElement = document.createElement("select");

    // Create an option for each colour and add it to the select element
    colours.forEach((colour) => {
      const optionElement = document.createElement("option");
      optionElement.value = colour;
      optionElement.text = colour;
      selectElement.appendChild(optionElement);
    });
    console.log(selectElement)
    // Add the select element to the content div
    contentDiv.appendChild(selectElement);

    // Split the paragraph into words
    const words = paragraph.split(" ");

    // Iterate over the words and create a span element for each
    words.forEach((word) => {
      const spanElement = document.createElement("span");
      spanElement.innerText = word + " ";
      pElement.appendChild(spanElement);

      // Add an event listener to the span element
      spanElement.addEventListener("click", (event) => {
        const selectedColour = selectElement.value;
        if (selectedColour === "none") {
          spanElement.style.backgroundColor = "transparent";
        } else {
          spanElement.style.backgroundColor = selectedColour;
        }
      });
    });

    // Add the paragraph element to the content div
    contentDiv.appendChild(pElement); 
}

/* function cahngeColor(word){
  let selectedWord = document.querySelector("span");
  selectedWord.style.backgroundColor = 
  word.style.backgrounColor
} */

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
