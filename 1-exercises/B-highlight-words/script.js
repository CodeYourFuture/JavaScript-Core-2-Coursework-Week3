// function highlightWords(paragraph, colours) {
//   let p = document.createElement("p");
//   let select = document.createElement("select");

//   // Iterating over the colours array and creating  an option
//   colours.forEach((colour) => {
//     const option = document.createElement("option");

//     option.value = colour;
//     option.textContent = colour;
//     select.appendChild(option);
//   });

//   // Turning the paragraph into an array 
//   const words = paragraph.split(" ");

//   // creatinging a span for each of the words
//   words.forEach((word) => {
//     const span = document.createElement("span");
//     span.textContent = word + " ";

//     span.addEventListener("click", () => {
//       // Getting the colours
//       const colour = select.value;

//       if (colour === "none") {
//         span.style.backgroundColor = "";
//       } else {
//         span.style.backgroundColor = colour;
//       }
//     });

//     p.appendChild(span);
//   });

//   // Adding the select and p to the div with id="content"
//   const content = document.querySelector("#content");
//   content.appendChild(select);
//   content.appendChild(p);
// }

function highlightWords(paragraph, colours) {

  let content = document.getElementById("content");

  let p = document.createElement("p");

  let select = document.createElement("select");
  let defaultOption = document.createElement("option");
  defaultOption.selected = true;
  defaultOption.disabled = true;
  defaultOption.value = "";
  defaultOption.innerText = "Choose a color for the text highlight";
  select.appendChild(defaultOption);

  colours.forEach((color) => {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    select.appendChild(option);
  });

  let words = paragraph.split(" ");
  words.forEach((word) => {
    let span = document.createElement("span");
    span.innerText = word + " ";
    span.addEventListener("click", (event) => {
      const selectedColor = select.value;
      if (selectedColor === "none") {
        span.style.backgroundColor = "";
      } else {
        span.style.backgroundColor = selectedColor;
      }
    });
    p.appendChild(span);
  });

  content.appendChild(select);
  content.appendChild(p);

}


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
