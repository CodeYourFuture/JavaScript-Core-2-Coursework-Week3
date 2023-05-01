function highlightWords(paragraph, colors) {
  const contentDiv = document.getElementById("content");

  // create select element
  const select = document.createElement("select");
  select.id = "color-select";
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.value = colors[i];
    // option.text = colors[i];
    if(i !== 0){
          option.text = colors[i].charAt(0).toUpperCase() + colors[i].slice(1);
    }
    select.appendChild(option);
  }
  document.body.appendChild(select);

  // create p element
  const p = document.createElement("p");

  // create array of words from paragraph
  const words = paragraph.split(" ");

  // iterate over words
  words.forEach((word) => {
    // create span element
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.addEventListener("click", () => {
      if (select.value === "none") {
        span.style.backgroundColor = "";
      } else {
        span.style.backgroundColor = select.value;
      }
    });
    p.appendChild(span);
  });

  // append select and p to contentDiv
  contentDiv.appendChild(select);
  contentDiv.appendChild(p);
}



const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colors = ["Please choose a colour", "yellow", "green", "blue", "none"];

highlightWords(paragraph, colors);
