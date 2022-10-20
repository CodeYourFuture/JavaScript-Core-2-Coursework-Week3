function highlightWords(paragraph, colours) {

  let divBox = document.getElementById("content");
  let newArr = paragraph.split(" ");

  // P ELEMENT
  let p = document.createElement("p");
  p.setAttribute("id","quote");

  // SELECT ELEMENT
  let select = document.createElement("select");
  select.setAttribute("id","selecting");

  // APPEND CHILD
  divBox.appendChild(p);
  divBox.appendChild(select)

// OPTIONS

  for(let i=0;i<colours.length;i++){
    let option = document.createElement("option");
    option.setAttribute("id",`options${i}`);
    option.setAttribute("value",`${colours[i]}`)
    option.innerText = colours[i]
    select.insertAdjacentElement("beforeend",option)
  }
  

 // SPANS

  for(let i=0;i<newArr.length;i++){
    let elements = document.createElement("span")
    elements.setAttribute("id",`word${i}`)
    elements.addEventListener("click",changeTheBackground)
    elements.innerText = newArr[i]+" ";
    p.insertAdjacentElement("beforeend",elements);
    
  }

  // ONCLICK WORD FUNCTION

  function changeTheBackground(e){
    let idNameOfWord = e.target.id;
    console.log(idNameOfWord)
    let clickedWord = document.getElementById(`${idNameOfWord}`)
    clickedWord.style.backgroundColor = document.getElementById("selecting").value
  }


}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
