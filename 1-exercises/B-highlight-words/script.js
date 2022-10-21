const content = document.querySelector("#content");
const select = document.createElement("select");
const p = document.createElement("p");
select.id = "mySelect";
content.appendChild(select);
content.appendChild(p);
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

function drpDown(colors) {
  for (let color of colors) {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    select.appendChild(option);
  }
}

function myparagraph(paragraph) {
  const words = paragraph.split(" ");
  for (let word of words) {
    const span = document.createElement("span");
    span.innerText = word + " ";
    span.style.cursor = "pointer";
    p.appendChild(span);
    span.addEventListener("click", function (e) {
      if (e.target.style.backgroundColor) {
        e.target.style.backgroundColor = "";
        e.target.style.color = "black";
      } else if (select.value === "yellow") {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "black";
      } else if (select.value !== "none") {
        e.target.style.backgroundColor = select.value;
        e.target.style.color = "white";
      }
      console.log(window.getComputedStyle(e.target).backgroundColor);
    });
  }
}

function highlightWords(paragraph, colours) {
  drpDown(colours);
  myparagraph(paragraph);
}

highlightWords(paragraph, colours);
