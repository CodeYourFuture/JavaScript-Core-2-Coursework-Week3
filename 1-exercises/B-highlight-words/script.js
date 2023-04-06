// function highlightWords(paragraph, colours) {
//   // Write your code here...
// // }
// }
// const colours = ["yellow", "green", "blue", "none"];

function highlightWords(paragraph, colours) {
  const p = document.createElement("p");
  
  const arrayForParagraph = paragraph.split(" ");
  arrayForParagraph.forEach((word) => {
  
    const span = document.createElement("span");
   span.innerText = word + " ";
    
    p.appendChild(span);
  });

  
  let select = document.createElement("select");
    const option = document.createElement("option");
  
  option.appendChild(document.createTextNode("Please choose a colour"));
    select.appendChild(option);
  colours.forEach((colour) => {
    
    const option = document.createElement("option");
    
    option.appendChild(
      document.createTextNode(
        colour.charAt(0).toUpperCase() + colour.substring(1)
      )
    );
    
    option.value = colour;
    select.appendChild(option);
  });
  
  const content = document.querySelector("#content");
  content.appendChild(p);  
  content.appendChild(select);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];
highlightWords(paragraph, colours);


Access to select input
const spans = document.querySelectorAll("span"),
  select = document.querySelector("select");

spans.forEach((span) => {

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


