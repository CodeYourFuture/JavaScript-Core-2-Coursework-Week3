// Get DOM element
const div = document.getElementById('content');

// Assign global variables
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];

function highlightWords(paragraph, colours) {
  // Write your code here...
  const arrOfWords = paragraph.split(" ");
  let eachOption = colours.map((color) => `<option value="${color}">${color}</option>`);
  let eachWord = '';
  let result = "";

  arrOfWords.forEach((word) => {
    eachWord += `<span>${word}</span> `;
  });

  result += `
     <p>${eachWord}</p>
     <select>
     <option value="">--Please choose an option--</option>
     ${eachOption}
     </select>`
  div.innerHTML = result;
}

function createSelectOption(span) {
  const currentColor = document.querySelector('select');
  if (currentColor.value === "none") {
    span.style.backgroundColor = ""; // set background color to default value
  } else if (span.style.backgroundColor === currentColor.value) {
    span.style.backgroundColor = ""; // remove highlighting if already highlighted
  } else {
    span.style.backgroundColor = currentColor.value;
  }
}

highlightWords(paragraph, colours);

window.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    createSelectOption(event.target);
  }
});
