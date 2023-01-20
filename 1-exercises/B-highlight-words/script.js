function highlightWords(paragraph, colours) {
const div = document.querySelector('#content');

//creating a 'p' tag for paragraf 
const p = document.createElement('p');
//creating button select
const select = document.createElement("select");

//displaying "p" in 'div'
div.appendChild(p);

//turning the paragraph into an array
  paragraph.split(" ").forEach((word) => {
    //creating "span" (marker)
    const span = document.createElement("span");
    //when cursor is click to the word background-color is changing to selected value
    span.addEventListener("click", (event) => {
      //
      const selectedColour = document.querySelector("select").value;
      event.target.style.backgroundColor = selectedColour;
    });
    span.innerText = word + " ";
    p.appendChild(span);
  });


//displaying"select" in 'div'
div.appendChild(select);
//using spread operator and foEach method to set color options
[...colours].forEach((colour) => {
  //creating dropdown "option"s
  const option = document.createElement("option");
  //define values for options
  option.value = colour;
  //define visible values for options
  option.innerText = colour[0] + colour.slice(1);
  //displaying dropdown "option"s inside of slect button
  select.appendChild(option);
});
}






const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];



highlightWords(paragraph, colours);
