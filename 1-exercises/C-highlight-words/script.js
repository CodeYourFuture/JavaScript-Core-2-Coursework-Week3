const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

const highlightWords = (paragraphArg, colours) => {
  let mainContent = document.getElementById("content");
  let paragraphEl = document.createElement("p");
  let selectEl = document.createElement("select");

  //giving Value and text to our dropdownlist
  colours.forEach((colour) => {
    let optionEl = document.createElement("option");
    optionEl.innerText = colour;
    optionEl.value = colour;
    selectEl.appendChild(optionEl);
  });

  //creating span for each word in our paragraph
  let paragraphArr = paragraphArg.split(" ");
  paragraphArr.forEach((word) => {
    let spanEl = document.createElement("span");
    spanEl.innerText = word + " ";

    //adding addEventListener function to our span
    spanEl.addEventListener("click", () => {
      const currentSelectedColour = selectEl.value;
      if (currentSelectedColour === "none") {
        spanEl.style.backgroundColor = "";
      } else {
        spanEl.style.backgroundColor = currentSelectedColour;
      }
    });
    paragraphEl.appendChild(spanEl);
  });

  mainContent.appendChild(selectEl);
  mainContent.appendChild(paragraphEl);
};

highlightWords(paragraph, colours);
