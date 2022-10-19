function highlightWords(paragraph, colours) {
  // Write your code here...

  const parentElement = document.querySelector("#content");
  const pElement = document.createElement("p");
  const selectElement = document.createElement("select");
  colours.forEach(color => {
    color;
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    selectElement.appendChild(option)
  })

 
  const splitedParagraph = paragraph.split(" ");
  Array.from(splitedParagraph).forEach((word) => {
    const spans = document.createElement("span");
    spans.innerText = word + " ";
  
    spans.addEventListener('click', function () {
   spans.style.backgroundColor = selectElement.value 
      if (selectElement.value === 'none') {
        spans.style.backgroundColor = "white";
      }
    });

pElement.appendChild(spans);
  });
  parentElement.append(selectElement);
  parentElement.appendChild(pElement);
}



const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut.";
const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
