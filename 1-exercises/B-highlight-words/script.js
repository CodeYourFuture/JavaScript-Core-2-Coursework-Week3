function highlightWords(paragraph, colours) {

  let currentHighlightColour;

  const contentDiv = document.querySelector("#content");

  const paragraphElement = document.createElement("p");

  const selector = document.createElement("select");

  for (let i = 0; i < colours.length; i++) {
    const optionElement = document.createElement("option");
    optionElement.text = colours[i];
    optionElement.value = colours[i];
    selector.appendChild(optionElement)
  };

  selector.addEventListener("change", (event) => {
    currentHighlightColour = event.target.value;
  })


  paragraph.split(" ").forEach((word, index, array) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = word;

    spanElement.addEventListener("click", (event) => {
      event.target.className = "";  // <p class="" ></p>
      event.target.classList.add(currentHighlightColour); // <p class=`${currentHighlightColour}` ></p>     
      // event.target.style = "";
      // event.target.style = `background-color: ${currentHighlightColour}`;
    })

      paragraphElement.appendChild(spanElement);

      if (index !== array.length - 1) {
        const emptySpaceSpanElement = document.createElement("span");
        emptySpaceSpanElement.textContent = " ";
        paragraphElement.appendChild(emptySpaceSpanElement);
      }
    });

    contentDiv.appendChild(paragraphElement);
    contentDiv.appendChild(selector);
}


const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["none", "lightblue", "lime", "coral"];

highlightWords(paragraph, colours);
