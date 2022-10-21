function highlightWords(paragraph, colours) {
  // Write your code here...

  const parentElement = document.querySelector("#content");
  const selectElement = document.createElement("select");
  const pElement = document.createElement("p");
  const splitedParagraph = paragraph.split(" ");

  for (let word of splitedParagraph) {
    const spans = document.createElement("span");
    spans.style.border = "solid" + 2 + "1px";
    spans.style.margin = 2 + "px";
    spans.innerText = word + " ";

    spans.addEventListener("click", function () {
      spans.style.backgroundColor = selectElement.value;
      selectElement.value === "none"
        ? (spans.style.backgroundColor = "white")
        : (spans.style.backgroundColor = selectElement.value);
    });

    pElement.appendChild(spans);
  }

  for (let color of colours.reverse()) {
    // reason for revese method is to be chosen automatically
    const option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    selectElement.appendChild(option);
  }

  parentElement.appendChild(selectElement);
  parentElement.appendChild(pElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut.";

const colours = ["yellow", "green", "blue", "none"];
highlightWords(paragraph, colours);
