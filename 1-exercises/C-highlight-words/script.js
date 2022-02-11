// ## Exercise

// - Create a `<p>` element.
// - Create a `<select>` element.
// - Iterate over the options array and create an `<option>` element in the `<select>` for each element.
// - You'll need to turn the paragraph into an array to iterate over it. You can use the `.split(" ")` method here.
// - Iterate over the array of words.
// - For each word, create a `<span>` element and set the innerText to the word, plus a space - " ". Add this to the `<p>`.
// - Each `<span>` should have an eventListener that will listen for clicks.
// - When clicked, we need to check the value of the `<select>` element using the `.value` property.
// - We can then update the `background-color` property of the `<span>` with the value of the select - remember that the value "none" is a special case and we need to be handled differently.
// - All of your HTML should go inside the `<div>` with the id **"content"**.



function highlightWords(paragraph, colours) {
  let para = document.createElement('p');
  let content = document.querySelector('#content');
  content.appendChild(para);
  let select = document.createElement('select');
  colours.forEach((color) => {
    let option = document.createElement("option");
    option.value = color;
    option.innerText = color;
    select.appendChild(option);
  
  })
  let words = paragraph.split(' ');
  words.forEach((word) => {
    let span = document.createElement('span');
    span.innerText = word + ' ';
    span.addEventListener('click', () => {
      let col = select.value;
      if (col === 'none') {
        span.style.backgroundColor = 'transparent';
      } else {
        span.style.backgroundColor = col;
      }
    })
    para.appendChild(span);
    
  })
  para.appendChild(select);
}
// let select = document.createElement('select');
// let option1 = document.createElement('option');
// option1.value = "yellow";
// select.appendChild(option1);

// let option2 = document.createElement("option");
// option1.value = "green";
// select.appendChild(option2);


const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
