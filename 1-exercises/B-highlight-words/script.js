function highlightWords(paragraph, colours) {
  const content = document.getElementById("content");

  // Create the <p> element
  const p = document.createElement("p");

  // Create the <select> element
  const select = document.createElement("select");

  // Iterate over the colours array and create an option for each colour
  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;
    option.textContent = colour;
    select.appendChild(option);
  });

  // Add the <select> element to the content div
  content.appendChild(select);

  // Turn the paragraph into an array of words
  const words = paragraph.split(" ");

  // Iterate over the words array
  words.forEach((word) => {
    // Create a <span> element for each word
    const span = document.createElement("span");

    // Add the word and a space to the <span> element
    span.textContent = word + " ";

    // Add an event listener to the <span> element
    span.addEventListener("click", (event) => {
      // Get the selected colour from the <select> element
      const selectedColour = select.value;

      // Set the background color of the <span> element to the selected colour
      if (selectedColour === "none") {
        span.style.backgroundColor = "";
      } else {
        span.style.backgroundColor = selectedColour;
      }
    });

    // Add the <span> element to the <p> element
    p.appendChild(span);
  });

  // Add the <p> element to the content div
  content.appendChild(p);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
