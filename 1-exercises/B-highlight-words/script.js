function highlightWords(paragraph, colours) {
  const pElement = document.createElement("p");
  const sElement = document.createElement("select");

  document.body.appendChild(sElement);
  document.body.appendChild(pElement);

  for (const color of colours) {
    const oElement = document.createElement("option");
    oElement.value = color;
    oElement.innerText = color;
    sElement.appendChild(oElement);
  }
  const wordArray = paragraph.split(" ");

  for (let word of wordArray) {
    const spanElement = document.createElement("span");
    spanElement.innerText = `${word} `;
    pElement.appendChild(spanElement);
    spanElement.addEventListener("click", changeColor);
    function changeColor() {
      if (sElement.value === "yellow") {
        spanElement.classList.add("yellow");
      } else if (sElement.value === "blue") {
        spanElement.classList.add("blue");
      } else if (sElement.value === "green") {
        spanElement.classList.add("green");
      } else {
        spanElement.classList.add("none");
      }
    }
  }

  //   function changeSize(){
  //   for(const item of document.querySelectorAll("a")){
  //     item.classList.add("larger");
  //   };
  // };

  // links.addEventListener("click", changeSize);

  //     function () {
  //   for (const link of document.querySelectorAll("a")) {
  //     link.classList.add("larger");
  //   }

  // let largerLinksBtn = document.querySelector("#largerLinksBtn");

  // largerLinksBtn.addEventListener("click", function () {
  //   for (const link of document.querySelectorAll("a")) {
  //     link.classList.add("larger");
  //   }
  // });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
