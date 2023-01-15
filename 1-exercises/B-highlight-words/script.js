function highlightWords(paragraph, colours) {
  // Write your code here...
  const p = document.createElement("p")
  document.body.appendChild(p)
  
  paragraph.split(" ").forEach((word) => {
    const span = document.createElement("span");
    span.addEventListener("click", (event) => {
      const selectedColour = document.querySelector("select").value;
      if ((selectedColour === "blue")) {
        event.target.style.backgroundColor = selectedColour;
        event.target.style.color = "white";
      }
      else {
        event.target.style.backgroundColor = selectedColour;
        event.target.style.color = "black";
      }
      
    });
    
    span.innerText = word + " ";
    p.appendChild(span);
  });

  const select = document.createElement("select");
  document.body.appendChild(select);
  ["Please choose a colour", ...colours].forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;
    option.innerText = colour[0].toUpperCase() + colour.slice(1);
    select.appendChild(option);
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "transparent"];

highlightWords(paragraph, colours);
