import { createElement } from "./creatEl.js";
import { newObj2, TestSpan1, randomId } from "./creatElAttributes.js";

const newSpanObj = newObj2(TestSpan1);

function pickedColorFn(event) {
  console.log(event);
  let pickedColor = document.querySelector("#selectEl").value;
  event.target.classList.remove("red", "yellow", "green", "blue");
  if (pickedColor === "none") return;
  event.target.classList.add(`${pickedColor}`);
}

function highlightWords(paragraph, colours) {
  let newP = createElement("p", { class: ["pParent"] });
  let wordNodes = paragraph.split(" ").map((el) => {
    let spanEl = createElement(
      "span",
      newSpanObj,
      pickedColorFn,
      ` ${el}`,
      randomId()
    );

    return spanEl;
  });
  newP.append(...wordNodes);

  let formEl = createElement("form", { class: ["formClass"], id: "form" });
  let labelEl = createElement("label", {
    class: ["label"],
    id: "label",
    for: "selectEl",
    innerText: "Please choose a color",
  });
  let selectEl = createElement("select", {
    class: ["ClassSelect"],
    id: "selectEl",
  });

  let colorsToAdd = colours.map((el) => {
    let optionEL = createElement("option", {
      innerText: el,
      class: ["optionClass", `${el}Option`],
    });
    return optionEL;
  });
  selectEl.append(...colorsToAdd);
  formEl.append(labelEl, selectEl);

  let parentDiv = document.querySelector("#content");
  parentDiv.append(newP, formEl);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
