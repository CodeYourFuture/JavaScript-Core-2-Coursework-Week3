const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];

// function highlightWords(paragraph, colours) {
//   let content = document.querySelector("#content");
//   let pElement = document.createElement("p");
//   let selectEl = document.createElement("select");
//   ;
//   for (let colour of colours) {
//     let optionEl = document.createElement("option");
//     optionEl.value = colour;
//     optionEl.innerText = colour;
//     selectEl.appendChild(optionEl);
//     // console.log(optionEl);
//   }

//   let paragraghEl = paragraph.split(" ");
//   for (let word of paragraghEl) {
//     let spanEl = document.createElement("span");
//     spanEl.innerText = word + " ";
//     pElement.appendChild(spanEl);

//     spanEl.addEventListener("click",addEventToSpan)
//     function addEventToSpan() {
//       let selectv=optionEl.value;
//       if (optionEl.value==="blue"){
//         spanEl.style.backgroundColor=selectv;
//       }else if (optionEl.value==="yellow"){
//        spanEl.style.backgroundColor=selectv;
//      }else if  (optionEl.value==="green"){
//        spanEl.style.backgroundColor=selectv;
//      }else spanEl.style.backgroundColor="white";
//     }
//   }
//   content.appendChild(pElement);
//   content.appendChild(selectEl)
// }

highlightWords(paragraph, colours);
function highlightWords(paragraph, colours) {
  let content = document.querySelector("#content");
  let pElement = document.createElement("p");
  let selectEl = document.createElement("select");
  content.appendChild(pElement);
  content.appendChild(selectEl);
  for (let colour of colours) {
    let optionEl = document.createElement("option");
    optionEl.value = colour;
    optionEl.innerHTML = colour;
    selectEl.appendChild(optionEl);
    console.log(optionEl.value);
  }
  let paragraghEl = paragraph.split(" ");
  for (let word of paragraghEl) {
    let spanEl = document.createElement("span");
    spanEl.innerText = word + " ";
    pElement.appendChild(spanEl);
    spanEl.addEventListener("click", function () {
      let selectedcolor = selectEl.value;
      if (selectedcolor === "blue") {
        spanEl.style.backgroundColor = selectedcolor;
      } else if (selectedcolor === "yellow") {
        spanEl.style.backgroundColor = selectedcolor;
      } else if (selectedcolor === "green") {
        spanEl.style.backgroundColor = selectedcolor;
      } else spanEl.style.backgroundColor = "white";
    });
  }
}
highlightWords(paragraph, colours);

// highlightWords(paragraph, colours);
// - Create a `<p>` element.
// - Create a `<select>` element.
// - Iterate over the options array and create an `<option>` element in the `<select>` for each element.
// - You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
// - Iterate over the array of words.
// - For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
// - Each `<span>` should have an eventListener that will listen for clicks.
// - When clicked, we need to check the value of the `<select>` element using the `.value` property.
// - We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
// - All of your HTML should go inside the `<div>` with the id **"content"**./
