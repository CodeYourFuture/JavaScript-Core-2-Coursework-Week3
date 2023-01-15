function highlightWords(paragraph, colours) {
  // Write your code here...

  const divContent = document.querySelector("#content");
  const paragraphInfo = document.createElement("p");
  const colorSelector = document.createElement("select");
  divContent.appendChild(paragraphInfo);
  divContent.appendChild(colorSelector);

  const splitParagraph = paragraph.split(" ");

  for (let word of splitParagraph) {
    const span = document.createElement("span");
    span.innerText = word + " ";

    span.addEventListener("click", (event) => {
      if (colorSelector.value === "none") {
        span.style.backgroundColor = null;
      } else {
        span.style.backgroundColor = colorSelector.value;
      }
    });

    paragraphInfo.appendChild(span);
  }

  for (let eachOption of colours) {
    const option = document.createElement("option");
    option.value = eachOption;
    option.innerText = eachOption;

    colorSelector.appendChild(option);
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];
// , "orange", "purple", 'pink'];

highlightWords(paragraph, colours);
