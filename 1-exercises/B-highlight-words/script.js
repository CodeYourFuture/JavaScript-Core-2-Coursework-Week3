function highlightWords(paragraph, colours) {
  // Create a `<p>` element.
  const pElement = document.createElement("p");

  // Create a `<select>` element.
  const myDropdown = document.createElement("select");

  // Create div variable
  const contentDiv = document.querySelector("#content");
  // remember to append it to a parent
  contentDiv.appendChild(myDropdown);

  // Iterate over the options (colours?) array and create an `<option>` element in the `<select>` for each element.
  for (const colour of colours) {
    // creating a new option
    const newOption = document.createElement("option");
    // assigning value and text
    newOption.value = colour;
    newOption.text = colour;
    // adding new option to the dropdown menu
    myDropdown.appendChild(newOption);
  }

  // To iterate over the paragraph, it needs to be an array. Atm, it's a string.
  // Turn the paragraph into an array - use the `.split(" ")` method here.
  const wordArray = paragraph.split(" ");
  contentDiv.append(pElement);
  for (const word of wordArray) {
    //- For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
    const spanElement = document.createElement("span");
    spanElement.innerText = `${word} `;
    pElement.append(spanElement);

    // - Each `<span>` should have an eventListener that will listen for clicks.

    spanElement.addEventListener("click", changeColour);

    function changeColour() {
      if (myDropdown.value === "yellow") {
        spanElement.classList.add("yellow");
      } else if (myDropdown.value === "green") {
        spanElement.classList.add("green");
      } else if (myDropdown.value === "blue") {
        spanElement.classList.add("blue");
      } else {
        spanElement.classList.add("none");
      }
    }

    // - When clicked, we need to check the value of the `<select>` element using the `.value` property.
  }

  // - Each `<span>` should have an eventListener that will listen for clicks.
  console.log(pElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
