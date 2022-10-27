function highlightWords(paragraph, colours) {
  // Write your code here...
  content = document.querySelector('#content'); // select div that will contain everything

  paragraphElement = document.createElement('p');       // create 'p' element
  content.appendChild(paragraphElement);                // append paragraph to div
  // paragraphElement.innerText = paragraph;               // set paragraph text to the paragraph parameter

  select = document.createElement('select');    // create 'select' element
  content.appendChild(select);

  for (let i = 0; i < colours.length; i++) {
    let option = document.createElement('option');  // create 'option' element
    select.appendChild(option);
    option.innerText = colours[i];
  }

  let paragraphArray = paragraph.split(" ");

  for (let i = 0; i < paragraphArray.length; i++) {
    eachWord = document.createElement('span');
    eachWord.innerText = `${paragraphArray[i]} `;
    paragraphElement.appendChild(eachWord);
  }

  allWordSpans = document.querySelectorAll('span');

  for (let i = 0; i < allWordSpans.length; i++) {
    allWordSpans[i].addEventListener('click', () => {
      let selectedColor = select.value;
      if (selectedColor != 'none') {
        allWordSpans[i].style.backgroundColor = selectedColor;
      }
      else {
        allWordSpans[i].style.backgroundColor = 'transparent';
      }
    })
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
