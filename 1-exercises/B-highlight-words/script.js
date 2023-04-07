function highlightWords(paragraph, colours) {
  let pElement = document.createElement("p");
  let menu = document.createElement("select");
  let menuOption = document.createElement("option");
  menuOption.value = "Please choose a colour";
  menuOption.textContent = "Please choose a colour";
  menu.appendChild(menuOption);
  for (colour of colours) {
    colourOption = document.createElement("option");
    colourOption.value = colour;
    colourOption.textContent = colour[0].toUpperCase() + colour.slice(1);
    menu.appendChild(colourOption);
  }

  let paragraphArr = paragraph.split(" ");
  for (word of paragraphArr) {
    let spanElement = document.createElement("span");
    spanElement.innerText = `${word} `;
    spanElement.addEventListener("click", function () {
      if (menu.value === "none") {
        spanElement.style.backgroundColor = "transparent";
      } else {
        spanElement.style.backgroundColor = menu.value;
      }
    });
    pElement.appendChild(spanElement);
  }

  document.querySelector("#content").append(menu, pElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
