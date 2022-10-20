function highlightWords(paragraph, colours) {
  const optionList = document.createElement("select");
  optionList.id = "colors";
  const contentDiv = document.querySelector("#content");
  contentDiv.appendChild(optionList);

  const changeColor = (e) => {
    const selctedElement = document.querySelector("select");
    const selectedColor = selctedElement.value;

    console.log(e.target.id);
    const selectedWord = document.getElementById(e.target.id);
    const selectedWordColor = e.target.style.background;
    if (!selectedWordColor || selectedWordColor != selectedColor)
      selectedWord.style.background = selectedColor;
    else selectedWord.style.background = "";

    console.log(selectedWord);
  };

  colours.forEach((color) => {
    const optionColor = document.createElement("option");
    optionColor.value = color;
    optionColor.text = color;
    optionList.appendChild(optionColor);
  });

  /* Adding Paragraph*/
  const theParagraph = document.createElement("p");
  const words = paragraph.split(" ");

  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.setAttribute("id", index);
    span.addEventListener("click", changeColor);
    span.innerText = word + " ";
    theParagraph.appendChild(span);
    contentDiv.appendChild(theParagraph);
  });

  // Write your code here...
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
