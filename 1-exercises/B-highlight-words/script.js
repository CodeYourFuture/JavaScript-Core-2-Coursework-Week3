var place = document.getElementById("content");
var para = document.createElement("p");

place.appendChild(para);

function highlightWords(paragraph, colours) {
  var select = document.createElement("select");
  select.setAttribute("id", "mySelect");
  place.appendChild(select);

  for (var i = 0; i < colours.length; i++) {
    var opt = document.createElement("option");
    opt.value = [i];
    opt.innerHTML = colours[i];
    select.appendChild(opt);
  }

  var party = paragraph.split(" ");

  for (var i = 0; i < party.length; i++) {
    var spa = document.createElement("span");
    spa.innerText = party[i] + " ";
    para.appendChild(spa);
  }

  var trial = document.getElementsByTagName("span");
  for (let i = 0; i < trial.length; i++) {
    trial[i].addEventListener("click", clicked);

    function clicked() {
      var result = document.getElementById("mySelect").value;
      console.log(result);
      if (result === "0") {
        trial[i].style.backgroundColor = "yellow";
      } else if (result === "1") {
        trial[i].style.backgroundColor = "green";
      } else if (result === "2") {
        trial[i].style.backgroundColor = "blue";
      } else if (result === "3") {
        trial[i].style.backgroundColor = "none";
      }
    }
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
