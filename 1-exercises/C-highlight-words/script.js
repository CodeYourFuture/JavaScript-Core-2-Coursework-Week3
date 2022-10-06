function highlightWords(paragraph, colours) {
  const contentEl = document.querySelector("#content");
  contentEl.style.width = "60%";
  contentEl.style.margin = "auto"
  contentEl.style.fontSize = "32px"

  const pEl = document.createElement("p");

  const labelEl = document.createElement("label")
  labelEl.innerText = "Pick a color to higlight " + " ";
  labelEl.style.fontSize = "22px"
  labelEl.style.color = "#363535"
  contentEl.appendChild(labelEl)

  const selectEl = document.createElement("select");
  selectEl.innerText = "--Select--"
  selectEl.style.width = "150px"
  selectEl.style.height = "26px"
  contentEl.append(selectEl);
  contentEl.append(pEl);

  colours.forEach((color) => {
    let optionEl = document.createElement("option");
    optionEl.style.fontSize = "20px"
    optionEl.innerText = color;
    optionEl.value = color;
    selectEl.appendChild(optionEl);
  });

  const arrOfWords = paragraph.split(" ");
  arrOfWords.forEach((word) => {
    const spanEl = document.createElement("span");
    spanEl.innerText = word + " ";
    pEl.append(spanEl);
  

    spanEl.addEventListener("click", () => {
      if (selectEl.value === "none") {
        // do nothing
        return
      }
        if (spanEl.style.backgroundColor = "white"){
       spanEl.style.backgroundColor = selectEl.value};
})
})
  

}




const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
