function highlightWords(paragraph, colours) {
  const newContent = document.querySelector("#content");

  //Create a `<p>` element.
  const p = document.createElement("p");

  // Create a `<select>` element.
  const select = document.createElement("select");

  // Iterate over the options array and create an `<option>` element in the `<select>` for each element.
  for (let i = 0; i < colours.length; i++) {
    const option = document.createElement("option");
    option.value = colours[i];
    option.innerText = colours[i];
    select.appendChild(option);
  }

  // turn the paragraph into an array
  const words = paragraph.split(" ");

  // Iterate over the array of words.
  for (let i = 0; i < words.length; i++) {
    //- For each word, create a `<span>` element and set the innerText to the word, plus a space - " ".
    const span = document.createElement("span");
    span.innerText = words[i] + " ";

    //Add this to the `<p>`.
    p.appendChild(span);

    //- Each `<span>` should have an eventListener that will listen for clicks.
      span.addEventListener("click", function () {
      const selectColor = select.value;
      if (selectColor === "none") {
        span.style.backgroundColor = "";
      } else {
        span.style.backgroundColor = selectColor;
      }
    });
  }
  newContent.appendChild(p);
  newContent.appendChild(select);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
