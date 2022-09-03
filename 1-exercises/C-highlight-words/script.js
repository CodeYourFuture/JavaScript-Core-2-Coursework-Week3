

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
  const paragraphAarray = paragraph.split(",");

const colours = ["yellow", "green", "blue", "none"];

// highlightWords(paragraph, colours);

// CREATE OPTION

const sel = document.createElement('select');
sel.name = 'drop1';
sel.id = 'Select1';

const options = colours.map(colour => {
  const value = colour.toLowerCase();
  return `<option value="${value}">${colour}</option>`;
});

sel.innerHTML = options;

window.onload = () => document.body.appendChild(sel);


// CREATE OPTION - END


let longParagraph = document.getElementById('content')
// paragraph.innerHTML = paragraphAarray[0]+ " <span>"+ paragraphgArray[1]+"</span>";

    


function highlightWords() {
  // Write your code here...
 content += `<div class = "paragrapg-container">
    <p class = "first-paragraph"> ${paragraphAarray}</p>
  </div>`

  longParagraph.innerHTML = content
}

highlightWords()