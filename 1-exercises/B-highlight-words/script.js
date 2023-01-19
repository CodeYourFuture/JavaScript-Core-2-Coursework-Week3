function highlightWords(paragraph, colours) {
  // Get the 'content' div
  const content = document.getElementById("content");

  // Create a 'p' element
  const para = document.createElement("p");

  // Create a 'select' element
  const select = document.createElement("select");
  // Add an id to the select element
  select.id = "color-select";
  // Iterate over the options array and create an 'option' element for each
  colours.forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerHTML = color;
    select.appendChild(option);
  });

  // Split the paragraph into an array of words
  const words = paragraph.split(" ");

  // Iterate over the array of words
  words.forEach((word) => {
    // Create a span element
    const span = document.createElement("span");
    // Set the innerText to the word
    span.innerText = word + " ";
    span.addEventListener("click", () => {
      // Get the select element
      const colorSelect = document.getElementById("color-select");
      // Check the value of the select element
      const selectedColor = colorSelect.value;
      if (selectedColor === "none") {
        span.style.backgroundColor = "";
      } else {
        span.style.backgroundColor = selectedColor;
      }
    });
    // Append the 'span' to the 'p' element
    para.appendChild(span);
  });

  // Append the 'select' element and the 'p' element to the 'content' div
  content.appendChild(select);
  content.appendChild(para);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
