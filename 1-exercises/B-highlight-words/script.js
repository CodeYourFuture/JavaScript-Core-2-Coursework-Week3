
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];


function highlightWords (paragraph, colours) {
let pElement = document.createElement("p");
pElement.innerText = paragraph
document.querySelector("#content").appendChild(pElement);

let selectElement = document.createElement("select")

let optionElement;
for (let colour of colours) {
  optionElement = document.createElement("option");
  optionElement.innerText = colour
  document.querySelector("#content").appendChild(selectElement);
  selectElement.appendChild(optionElement);
}
let pText = document.querySelector("pElement").innerText
let paragraphArray = pText.split(" ");
for (let i = 0; i < paragraphArray.length; i++) {
  let spanElement = document.createElement("span")
  spanElement.innerText = paragraphArray[i] + " ";
  pElement.appendChild(spanElement)
  spanElement.addEventListener ("click", function() {
    if (optionElement.target.value == "yellow") {
      // spanElement.style.color = "yellow"
      console.log("111111")
    } else if (optionElement.target.value == "green") {
      // spanElement.style.color = "green"
      console.log("22222")
    } else if (optionElement.target.value == "blue") {
    //   spanElement.style.color = "blue";
    console.log("333333")
    }
  })
}
  
}




highlightWords(paragraph, colours);
