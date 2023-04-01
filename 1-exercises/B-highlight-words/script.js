/*function highlightWords(paragraph, colours) {
  // Write your code here...
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];
*/

function highlightWords(paragraph, colours) {
  // Create p tag
  const p = document.createElement("p");
  // Turn string to array
  const arrayForParagraph = paragraph.split(" ");
  arrayForParagraph.forEach((word) => {
    // Create span tag
    const span = document.createElement("span");
    // Add word to the span
    span.innerText = word + " ";
    //Add span to p
    p.appendChild(span);
  });

  // Create select tag
  let select = document.createElement("select");
  // Create option tag
  const option = document.createElement("option");
  // give a default value to option
  option.appendChild(document.createTextNode("Please choose a colour"));
  // Add option to select
  select.appendChild(option);
  colours.forEach((colour) => {
    // Create option tag
    const option = document.createElement("option");
    // Add colour to option
    option.appendChild(
      document.createTextNode(
        colour.charAt(0).toUpperCase() + colour.substring(1)
      )
    );
    // Add value to option
    option.value = colour;
    // Add option to the select
    select.appendChild(option);
  });
  // Access to content div
  const content = document.querySelector("#content");
  // Add p to content div
  content.appendChild(p);
  // Add select to content div
  content.appendChild(select);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];
highlightWords(paragraph, colours);

//variables
// Access to select input
const spans = document.querySelectorAll("span"),
  // Access to select
  select = document.querySelector("select");

//Eventlisteners
spans.forEach((span) => {
  // Add eventlistener for all spans in p
  span.addEventListener("click", function () {
    switch (select.value) {
      case "yellow":
        span.style.backgroundColor = "yellow";
        break;
      case "green":
        span.style.backgroundColor = "green";
        break;
      case "blue":
        span.style.backgroundColor = "blue";
        break;
      default:
        span.style.backgroundColor = "none";
        break;
    }
  });
});
