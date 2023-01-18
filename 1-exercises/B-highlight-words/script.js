function highlightWords(paragraph, colours) {

  const createP = document.createElement("p");
  const findDiv = document.querySelector("div");
  findDiv.appendChild(createP);

  const createSelect = document.createElement("select");
  findDiv.appendChild(createSelect);

  const createOption = document.createElement("option")
  createOption.innerText = "Please choose a colour";
  createOption.selected = true;
  createSelect.appendChild(createOption);

  colours.forEach(colour => {
    const createOption = document.createElement("option")
    createOption.innerText = `${colour[0].toUpperCase()}${colour.slice(1)}`;
    createOption.value = colour;
    createSelect.appendChild(createOption);
  });

  paragraph.split(" ").forEach(word => {
    const createSpan = document.createElement("span")
    createSpan.innerText = `${word} `;
    createP.appendChild(createSpan);

    createSpan.addEventListener("click", () => {
      createSelect.value === "none" ? createSpan.style.backgroundColor = null : createSpan.style.backgroundColor = createSelect.value;
    })
  })
}



const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
