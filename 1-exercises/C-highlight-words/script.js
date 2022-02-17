//create function to change background
let backgroundChange = (event) => {
  let selectEl = document.querySelector("select");
  let selColour = selectEl.value;

  let selectedWord = event.target;
  selectedWord.style.backgroundColor = selColour;
};

function highlightWords(paragraph, colours) {
  //create elements
  let pEl = document.createElement("p");
  let selEl = document.createElement("select");

  //iterate through the options array creating options for each colour
  colours.forEach((colour) => {
    let opEl = document.createElement("option");
    opEl.innerText = colour;
    opEl.value = colour;
    selEl.appendChild(opEl);
  });
  //convert paragraph into array and iterate through to create span elements and add event listener
  paragraph.split(" ").forEach((word) => {
    let spanEl = document.createElement("span");
    spanEl.innerText = word + " ";

    spanEl.addEventListener("click", backgroundChange);
    pEl.appendChild(spanEl);
  });

  let divEl = document.querySelector("#content");
  divEl.append(selEl, pEl);
}


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
