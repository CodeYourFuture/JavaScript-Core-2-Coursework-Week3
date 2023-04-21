// function highlightWords(paragraph, colours) {
//   // Write your code here...
// // }
// }
// const colours = ["yellow", "green", "blue", "none"];

function highlightWords(paragraph, colours) {
  const p = document.createElement("p");
  
  const arrayForParagraph = paragraph.split(" ");
  arrayForParagraph.forEach((word) => {
  
    const span = document.createElement("span");
   span.innerText = word + " ";
    
    p.appendChild(span);
  });

  // I create a function highlightWords with arguments paragraph and colours. The purpose is to highlight each word
  //  with different colors. The function create a new 'p' element with document.createElement method in the const p variable.
  // Next the paragrath is split into an array of word with the slice() method with a space, see (" "). This array is stored
  // in the variable arrayForParagraph. The .forEach method loops this arrays words. Inside the loop a new span element
  //  is created using .createElement and the current word is added as text content to the `span` using .innerText.
  // The .appendChild() method is used to append the span to the p element.
  // First section.

  
  let select = document.createElement("select");
    const option = document.createElement("option");
  
  option.appendChild(document.createTextNode("Please choose a colour"));
    select.appendChild(option);
  colours.forEach((colour) => {
    
    const option = document.createElement("option");
    
    option.appendChild(
      document.createTextNode(
        colour.charAt(0).toUpperCase() + colour.substring(1)
      )
    );
    
    option.value = colour;
    select.appendChild(option);
  });
  
  const content = document.querySelector("#content");
  content.appendChild(p);  
  content.appendChild(select);
}
const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";
const colours = ["yellow", "green", "blue", "none"];
highlightWords(paragraph, colours);

// In this code section I have the variable select and it create a new select by using .createElement method. Next variable
// create option. I use .appendChild on option and on the document create a text node Please choose a color. It appends the
// option to the select element. Then the forEach loop the color array. Inside the variable const option is called. 
// code is adding a new text node to an HTML element named option. The text node is created using the document.createTextNode()
//  method, which takes a string as its argument. The charAt() method is used to retrieve the first character of the string, 
// which is then transformed to uppercase using the toUpperCase() method. Then the substring() method is used to retrieve the 
// rest of the string starting from the second character (since the first character has already been transformed to uppercase).
// It adds an option element for each color in the color array. Then, for each word in the array, the code checks if it appears 
// in the colours array. The variable const content equals document use the .querySelector method show th background color and 
// the word. Otherwise, the word is simply appended to the `p` element. The p and select elements are appended to the content 
// element in the HTML page, which is identified using the querySelector() method with a CSS selector. 
// Then comes the code const content paragraph with our string of words. And the variable colors that match the highlightWords 
// arguments paragraph and colors.


Access to select input
const spans = document.querySelectorAll("span"),
  select = document.querySelector("select");

spans.forEach((span) => {

  span.addEventListener("click", function () {
    switch (select.value) {
      case "yellow":
        span.style.backgroundColor = "yellow";
        break;
      case "green":
        span.style.backgroundColor = "green";
        break;
      case "blue":
        span.style.backgroundColor = "blue";
        break;
      default:
        span.style.backgroundColor = "none";
        break;
    }
  });
});

// This code is adding event listeners to each span element in the HTML page, and changing its background color based on the selected 
// value of a select element. This code is adding event listeners to each span element in the HTML page, and changing its background 
// color based on the selected value of a select element. I use a forEach loop to iterate over each span element and adds event listeners
// for the click element. Inside I use a switch statement to check the value the statement. And finally, the code choose color.
// The break statement is is used to exit the switch statement once a match is made.If none of the case statements match the
//  selected value, the default statement sets the background color of the span element to "none", effectively removing any highlighting.


