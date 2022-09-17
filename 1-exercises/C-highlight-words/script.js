function highlightWords(paragraph, colours) {

  function highlightWordToggle(event) {
      if (event.target.classList[1] === undefined) {
      event.target.classList.add(`highlighted-${selectElement.value}`);
    } else if (event.target.classList[1] === `highlighted-${selectElement.value}`) {
      event.target.classList.remove(`highlighted-${selectElement.value}`);
    } else if (event.target.classList[1]) {
      event.target.classList.remove(event.target.classList[1]);
      event.target.classList.add(`highlighted-${selectElement.value}`);
    }
  }
  // ^ how can i move this outside of here and still reference selectElement... ?

  const divElement = document.createElement("div");
  divElement.className = "option-container";
  // create the div element (to contain the options)

  const spanElement = document.createElement("span");
  spanElement.className = "option-description";
  spanElement.textContent = "Choose a highlighter colour:"
  // create the span element (for the options description)

  const selectElement = document.createElement("select");
  selectElement.className = "option-drop-down";
  // create the select element (for the options drop down menu)

  colours.forEach((element, index) => {
    // loop through each colour in the colours array
    const optionElement = document.createElement("option");
    optionElement.textContent = element;
    optionElement.value = element;
    optionElement.style.backgroundColor = colours[index];
    selectElement.appendChild(optionElement);
    // set its text content
    // set its value
    // set its backgroundColour matching the index to the colours array
    // append it to the select element
  })

  const buttonElement = document.createElement("button");
  buttonElement.className = "button-clean-the-page"
  buttonElement.textContent = "Clean The Page"
  buttonElement.addEventListener("click", cleanThePage)
  // create the buttom element (for the options "clean the page")

  divElement.appendChild(spanElement);
  divElement.appendChild(selectElement);
  divElement.appendChild(buttonElement);
  // append those three elements to the div element (to contain the options)

  content.appendChild(divElement);
  // append the div (to contain the options) to the div "content"

  const pElement = document.createElement("p");
  pElement.className = "paragraph";
  // create the paragraph element

  paragraph.split(" ").forEach((element) => {
    // split the paragraph string into an array and loop through each word
    const spanElement = document.createElement("span");
    spanElement.classList.add("word");
    spanElement.textContent = `${element} `;
    spanElement.addEventListener("click", highlightWordToggle);
    pElement.appendChild(spanElement);
    // create a new span element
    // set its class to "word"
    // set its text content to the element from the array
    // add the eventListener to trigger the highlightWordToggle function on click
    // append the span element to the paragraph element
  })

  content.appendChild(pElement);
  // append the paragraph element to the content div
}

function cleanThePage() {
  const spanElements = document.getElementsByClassName("word");
  // get all the words using the class "word"

  for (let span in spanElements) {

    spanElements[span].className = "word";
    // set their className to just "word" to remove all highlighting

    // WHY DON'T THESE WORK? >:(
    
    // console.log(spanElements[span])
    // console.log(spanElements[span].className)
    // console.log(spanElements[span].className.length)

    // if (spanElements[span].className.length > 4) {
    //   console.log("longer than 4")
    //   spanElements[span].className = "word";
    // }

    // console.log(spanElements[span].classList)
    // console.log(spanElements[span].classList[0])
    // console.log(spanElements[span].classList[1])

    // if (spanElements[span].classList[1]) {
    //   console.log("there is a second class")
    //   spanElements[span].className = "word";
    // }

  }
}

const content = document.getElementById("content");
// define the div element "content"

const h1Element = document.createElement("h1");
h1Element.textContent = "✍️Highlight Words";
content.appendChild(h1Element);
// create the h1 element and append it to the div element "content"

const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["none", "violet", "indigo", "blue", "green", "yellow", "orange", "red"];

highlightWords(paragraph, colours);
