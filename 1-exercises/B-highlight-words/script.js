function highlightWords(paragraph, colours) {
  // Write your code here...\
  const div = document.getElementById('content');
  let eachWord = '';
  const arrOfWords = paragraph.split(" ");
  arrOfWords.forEach((word, index) => {
    eachWord += `<span id="${index}">${word}</span> `;
  });
  let eachOption = '';
  colours.forEach(colour => {
    eachOption += `<option value="${colour}">${colour}</option>`
  })
  let result = "";
  result += `
  <p>${eachWord}</p>
  <select id="mySelect">
  <option value="1">--Please choose an option--</option>
  ${eachOption}
  </select>`
  div.innerHTML = result;
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);

const selectSpanEvent = document.querySelector('p');
const selectElement = document.getElementById("mySelect");

let currentColor = "";

selectSpanEvent.addEventListener('click', (event) => {
    createSelectOption(event.target.id);
})

selectElement.addEventListener("change", function() {
  currentColor = selectElement.value;
});

function createSelectOption(spanId) {
  console.log(spanId)
  const span = document.getElementById(`${spanId}`)
  span.style.backgroundColor = currentColor;
}
