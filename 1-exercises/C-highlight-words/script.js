const whereToAttach = document.querySelector("#content");
console.log(whereToAttach);

function highlightWords(paragraph, options) {
  // creating our elements
  const ourParagraph = document.createElement("p");
  const ourSelect = document.createElement("select");

  // this is where we amend those elements
  options.forEach((colour) => {
    // create the element
    const ourOption = document.createElement("option");

    // amend the element as you see fit
    ourOption.value = colour;
    ourOption.innerText = colour;

    // add the element to the select menu
    ourSelect.appendChild(ourOption);
  });

  paragraph.split(" ").forEach((word) => {
    // create the element
    const ourSpan = document.createElement("span");

    // amend the element as you see fit
    ourSpan.innerText = word + " ";
    ourSpan.addEventListener("click", () => {
      const currentSelectedColour = ourSelect.value;

      if (currentSelectedColour === "none") {
        ourSpan.style.backgroundColor = "";
      } else {
        ourSpan.style.backgroundColor = currentSelectedColour;
      }
    });

    // add the element to the paragraph tag
    ourParagraph.appendChild(ourSpan);
  });

  // add those elements to the page
  whereToAttach.appendChild(ourSelect);
  whereToAttach.appendChild(ourParagraph);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);


