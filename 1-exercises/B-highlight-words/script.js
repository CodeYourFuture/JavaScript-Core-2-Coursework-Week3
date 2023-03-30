function highlightWords(paragraph, colours) {
  // Write your code here...
  const newArray = paragraph.split(" ");
  const divContainer = document.querySelector("#content");
  const selectColour = document.createElement("select");
  const paraGraph = document.createElement("p");
  selectColour.innerHTML = "<option>Please choose a colour</option>";

  for (let colour of colours) {
    const optionColour = document.createElement("option");
    optionColour.value = colour;
    optionColour.innerText = colour.charAt(0).toUpperCase() + colour.slice(1);
    selectColour.appendChild(optionColour);
  }
  divContainer.appendChild(selectColour);
  for (let word of newArray) {
    const spanContent = document.createElement("span");
    spanContent.addEventListener("click", (event) => {
      event.preventDefault();
      if (selectColour.value == "none") {
        spanContent.style.backgroundColor = "#fff";
      } else {
        spanContent.style.backgroundColor = selectColour.value;
      }
    });
    spanContent.innerText = `${word} `;
    paraGraph.appendChild(spanContent);
  }
  divContainer.appendChild(paraGraph);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
