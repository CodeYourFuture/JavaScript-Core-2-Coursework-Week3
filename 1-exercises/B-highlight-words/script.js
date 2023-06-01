function highlightWords(paragraph, colours) {
  // Write your code here...
  const paragraphArray = paragraph.split(" ");
  for (const word of paragraphArray) {
    const selectorElement = document.createElement("select");
    for (const colour of colours) {
      const optionElement = document.createElement("option");
      optionElement.innerText = colour;
      selectorElement.appendChild(optionElement);
    }

    const content = document.querySelector("#content");
    content.appendChild(selectorElement);

    const para = document.createElement("p");
    const spanElement = document.createElement("SPAN");
    const spanTextNode = document.createTextNode(word + " ");
    spanElement.appendChild(spanTextNode);

    //const spanElementOnclick = document.querySelector('span');
    //const y = spanElementOnclick.innerHTML();
    //const x = document.querySelector('option').value;
    // spanElementOnclick.setAttribute('onclick','this.innerHTML.style.backgroundcolor = x');

    //spanElementOnclick.addEventListener("click", function() {
    //  this.style.backgroundColor = x});
    para.appendChild(spanElement);
    // const content = document.querySelector("#content");
    content.appendChild(para);
    const spanElementOnclick = document.querySelector("span");
    const x = document.querySelector("option");
    const z = x.value;
    spanElementOnclick.addEventListener("click", function () {
      this.style.backgroundColor = z;
    });
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
