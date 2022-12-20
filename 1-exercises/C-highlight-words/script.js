function highlightWords(paragraph, colours) {
  const container = document.getElementById("content");
  const select = document.createElement("select");
  const option = document.createElement("option");
  option.innerText = "Choose a colour";
  select.appendChild(option).disabled = true;
  container.appendChild(select);

  const par = document.createElement("p");
  container.appendChild(par);

  colours.forEach((color) => {
    const opt = document.createElement("option");
    opt.innerText = color;
    select.appendChild(opt);
  });

  paragraph.split(" ").forEach((word) => {
    const span = document.createElement("span");
    span.innerText = word + " ";
    par.appendChild(span);
    span.addEventListener("click", () => {
      span.style.backgroundColor = select.value;
    });
  });

}

const paragraph = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
