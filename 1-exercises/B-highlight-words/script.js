function highlightWords(paragraph, colours) {
  // Write your code here...
  const wordsparagraph = document.createElement("p");
  const selector = document.createElement("select");
  document.querySelector("#content").appendChild(wordsparagraph);
  document.querySelector("#content").appendChild(selector);
  colours.unshift("Please choose a colour");
  for (let color of colours) {
    const colorSelect = document.createElement("option");
    colorSelect.value = color;
    colorSelect.innerText = color[0].toUpperCase() + color.slice(1);
    selector.appendChild(colorSelect);
  }
  let splitParagraph = paragraph.split(" ");
  for (let word of splitParagraph) {
    const spanName = document.createElement("span");
    spanName.innerText = word + " ";
    wordsparagraph.appendChild(spanName);
    spanName.addEventListener("click", () => {
      if (selector.value === "none") {
        spanName.style.backgroundColor = null;
      } else {
        spanName.style.backgroundColor = selector.value;
      }
    });
    wordsparagraph.appendChild(spanName);
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
