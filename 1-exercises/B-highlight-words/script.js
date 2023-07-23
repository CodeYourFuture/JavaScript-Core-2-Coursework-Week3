// function highlightWords(paragraph, colours) {
//   // Write your code here...
// }

// const paragraph =
  // "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

// highlightWords(paragraph, colours);

function highlightWords(paragraph, colours) {
  const p = document.createElement("p");
  const select = document.createElement("select");
  const options = colours.map((colour) => {
    const option = document.createElement("option");
    option.innerText = colour;
    option.value = colour;
    return option;
  });

  options.unshift(createOption("none"));

  options.forEach((option) => {
    select.appendChild(option);
  });

  const words = paragraph.split(" ");

  words.forEach((word) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.addEventListener("click", () => {
      const selectedColour = select.value;
      if (selectedColour === "none") {
        span.style.backgroundColor = null;
      } else {
        span.style.backgroundColor = selectedColour;
      }
    });
    p.appendChild(span);
  });

  document.getElementById("content").appendChild(p);
  document.getElementById("content").appendChild(select);

  function createOption(value) {
    const option = document.createElement("option");
    option.value = value;
    option.innerText = "None";
    return option;
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero. Sed enim ex, pellentesque at risus sit amet, rutrum posuere diam. Nunc eu elementum tellus. Sed id lectus ac sapien congue tristique at at felis. Sed quam odio, aliquam nec cursus vitae, aliquet quis sapien. Maecenas molestie nunc et suscipit rhoncus. Sed dui ante, interdum in laoreet vel, varius nec justo. In hac habitasse platea dictumst.";
const colours = ["blue", "purple", "orange"];
highlightWords(paragraph, colours);
