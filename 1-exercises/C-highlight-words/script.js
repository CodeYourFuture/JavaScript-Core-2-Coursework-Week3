const highlightWords = (paragraph, colours) => {
  // Write your code here...
  const mainDiv = document.querySelector("#content");
  const para = document.createElement("p");
  const select = document.createElement("select");

  let options = colours
    .map((colour) => {
      return `
      <option>${colour}</option>
    `;
    })
    .join("");

  let wordsList = paragraph.split(" ");
  let words = wordsList
    .map((word) => {
      return `<span> ${word} </span>`;
    })
    .join("");

  para.innerHTML = words;
  select.innerHTML = options;
  mainDiv.append(select);
  mainDiv.append(para);

  let spans = para.querySelectorAll("span");
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      let colorName = select.value;
      if (colorName !== "none") {
        span.style.backgroundColor = colorName;
      }
    });
  });
};

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
