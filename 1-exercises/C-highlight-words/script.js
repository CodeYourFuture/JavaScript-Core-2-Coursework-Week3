function highlightWords(paragraph, colours) {
  // Write your code here...
  const myParagraph = document.createElement("p");
  const content = document.getElementById("content");
  let selectList = document.createElement("select");
  selectList.id = "mySelect";
  selectList.style.fontSize = "20px";
  content.appendChild(selectList);
  content.appendChild(myParagraph);
  for (var i = 0; i < colours.length; i++) {
    var option = document.createElement("option");
    option.value = colours[i];
    option.text = colours[i];
    selectList.appendChild(option);
  }
  const splitParagraph = Array.from(paragraph.split(" "));
  for (var i = 0; i < splitParagraph.length; i++) {
    var mySpan = document.createElement("span");
    mySpan.innerText = splitParagraph[i] + " ";
    mySpan.id = "mySpan" + i;
    myParagraph.appendChild(mySpan);
    let mySpan2 = document.getElementById("mySpan" + i);
    mySpan2.addEventListener("click", function () {
      highLight(mySpan2);
    });
  }
}

function highLight(mySpan) {
  var selectedColour = document.getElementById("mySelect").value;
  mySpan.style.backgroundColor = selectedColour;
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
