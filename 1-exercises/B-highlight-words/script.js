function highlightWords(paragraph, colours) {
  let div = document.querySelector("#content");

  let parag = document.createElement("p");
  div.appendChild(parag);
  let select = document.createElement("select");

  let options = ["Please choose a colour"];
  for (let i = 0; i < options.length; i++) {
    let option = document.createElement("option");
    option.innerHTML = "Please choose a colour";
    if (i === 0) {
      option.selected = true;
    }
    select.appendChild(option);
  }

  div.appendChild(select);

  for (let color of colours) {
    let option = document.createElement("option");
    option.value = color;
    option.textContent = color[0].toUpperCase() + color.slice(1);
    select.appendChild(option);
  }

  let words = paragraph.split(" ");

  for (let word of words) {
    let span = document.createElement("span");
    span.textContent = word + " ";
    parag.appendChild(span);

    span.addEventListener("click", function () {
      let selectedColor = select.value;
      if (selectedColor === "none") {
        span.style.backgroundColor = " ";
      } else {
        span.style.backgroundColor = selectedColor;
      }
    });
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
