function highlightWords(paragraph, colours) {
  let content = document.getElementById("content");
  let p = document.createElement("p");
  content.appendChild(p);
  let select = document.createElement("select");
  content.appendChild(select);

  colours.forEach((colour) => {
    let option = document.createElement("option");
    select.appendChild(option);
    option.innerHTML = colour;
    select.value = colour;
    //
    //
    //  Can't seem to get the paragraph to space a normal sentence would.
    //  when I get it that way, it does not output the required result.
    //  IE.  set the background of clicked "word" to the value in the select drop-down, instead it either initiates it on the whole paragraph or each indivual letter.
    // Not sure what I'm missing here.

    paragraph.split(" ").forEach((word) => {
      let span = document.createElement("span");
      span.innerText = word;
      p.appendChild(span);
      span.addEventListener("click", () => {
        span.style.backgroundColor = select.value;
      });
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
