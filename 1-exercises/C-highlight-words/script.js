function highlightWords(paragraph, colours) {
  let contentDiv = document.getElementById("content");
  let pr = document.createElement("p");
  pr.style.backgroundColor = "white";

  let labelList = document.createElement("label");
  labelList.for = "colorsList";
  labelList.innerText = "Choose color: ";
  labelList.style.padding = "10px";
  let colorsList = document.createElement("select");
  colorsList.id = "colorsList";
  colorsList.name = "colorsList";
  colorsList.style.width = "80px";
  colorsList.style.textAlign = "center";
  colorsList.style.backgroundColor = "yellow";

  let cl = [];
  let sp = [];

  function getColor(color) {
    return color == "none" ? pr.style.backgroundColor : color;
  }

  for (i in colours) {
    cl[i] = document.createElement("option");
    colorsList.appendChild(cl[i]);

    cl[i].value = colours[i];
    cl[i].style.backgroundColor = getColor(colours[i]);
    cl[i].innerText = colours[i];
  }

  colorsList.addEventListener("change", () => {
    colorsList.style.backgroundColor = getColor(colorsList.value);
  });

  contentDiv.appendChild(labelList);
  contentDiv.appendChild(colorsList);
  contentDiv.appendChild(pr);

  const parag = paragraph.split(" ").map((word) => word);
  for (i in parag) {
    sp[i] = document.createElement("span");
    sp[i].innerText = parag[i];
    pr.appendChild(sp[i]);
    pr.append(" ");
  }

  document.querySelectorAll("span").forEach((element) => {
    element.addEventListener("click", () => {
      element.style.backgroundColor = getColor(colorsList.value);
    });
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
