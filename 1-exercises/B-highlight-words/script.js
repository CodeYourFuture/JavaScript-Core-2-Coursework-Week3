function highlightWords(paragraph, colours) {
  // Write your code here...

  const para = document.createElement("p");
  const selectColour = document.createElement("select");

  document.querySelector("#content").appendChild(para);
  document.querySelector("#content").appendChild(selectColour);

  ["Please choose a colour", ...colours].forEach((colour) => {
    let colourOption = document.createElement("option");
    colourOption.value = colour;
    colourOption.innerText = colour[0].toUpperCase() + colour.slice(1);
    selectColour.appendChild(colourOption);
  });

  paragraph.split(" ").forEach((word) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    para.appendChild(span);

    span.addEventListener("click", function () {
      switch (document.querySelector("select").value) {
        case "yellow":
          span.style.backgroundColor = "yellow";
          break;
        case "green":
          span.style.backgroundColor = "green";
          break;
        case "blue":
          span.style.backgroundColor = "blue";
          break;
        default:
          span.style.backgroundColor = "none";
          break;
      }
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
