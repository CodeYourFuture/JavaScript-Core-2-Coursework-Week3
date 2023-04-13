function highlightWords(paragraph, colours) {
  const divElement = document.querySelector("#content");

  const pElement = document.createElement("p");

  let paraArray = paragraph.split(" ");

  const selectElement = document.createElement("select");

  // we create the a firstOptionElement as our first option that will have "Please choose a colour"
  const firstOptionElement = document.createElement("option");
  firstOptionElement.textContent = "Please choose a colour";
  firstOptionElement.value = "Please choose a colour";
  selectElement.appendChild(firstOptionElement);

  // forEach element inside the paraArray we make a new span tag
  // we can update that span tag with the curent word
  // we can then append the span to the p tag
  // when we click on the span
  // we need to find the value in the select tag

  paraArray.forEach((word, index) => {
    const spanElement = document.createElement("span");
    spanElement.textContent = `${word} `;

    spanElement.addEventListener("click", function (event) {
      event.preventDefault();
      if (selectElement.value === "yellow") {
        spanElement.classList.add("yellow");
      } else if (selectElement.value === "green") {
        spanElement.classList.add("green");
      } else if (selectElement.value === "blue") {
        spanElement.classList.add("blue");
      } else {
        spanElement.classList.remove("yellow");
        spanElement.classList.remove("green");
        spanElement.classList.remove("blue");
      }
    });

    pElement.appendChild(spanElement);
  });

  colours.forEach((colour, index) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = colour[0].toUpperCase() + colour.substr(1);
    optionElement.value = colour;
    selectElement.appendChild(optionElement);
  });

  divElement.appendChild(pElement);

  divElement.appendChild(selectElement);
}

const paragraph =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);


