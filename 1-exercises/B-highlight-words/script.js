function highlightWords(paragraph, colours) {
  const content = document.getElementById("content");

  const newParagraph = document.createElement("p");
  const select = document.createElement("select");

  for (let i = 0; i < colours.length; i++) {
    const option = document.createElement("option");
    option.value = colours[i];
    option.text = colours[i][0].toUpperCase() + colours[i].substring(1);
    select.add(option);
  }

  const words = paragraph.split(" ");
  for (let i = 0; i < words.length; i++) {
    const wordSpan = document.createElement("span");
    wordSpan.innerText = words[i] + " ";
    wordSpan.addEventListener("click", function (event) {
      const color = select.value;
      if (color === "none") {
        event.target.style.backgroundColor = "";
      } else {
        event.target.style.backgroundColor = color;
      }
    });
    newParagraph.appendChild(wordSpan);
  }

  content.appendChild(newParagraph);
  content.appendChild(select);
}

let newParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
