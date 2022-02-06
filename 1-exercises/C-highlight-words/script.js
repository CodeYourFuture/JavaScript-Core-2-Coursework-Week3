const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero..."
const colours = ["blue", "purple", "orange", "none"]
const content = document.querySelector('#content')
const select = document.createElement('select')
let p = document.createElement('p');
let paraTextColor = ''

content.appendChild(p);
content.appendChild(select)



function highlightWords(paragraph, colours) {
  const words = paragraph.split(" ");
  for (let word of words) {
    const span = document.createElement('span');
    span.innerText = `${word} - `;
    span.addEventListener('click', () => {
      
        span.style.background = paraTextColor
      
      
    })
    p.appendChild(span)
  }
  
  
  

  for (let color of colours) {

    const option = document.createElement('option');
    option.value = color;
    option.innerText = color;
    select.addEventListener('change', (event) => {
      
      paraTextColor = event.target.value;
      
    })
    select.appendChild(option);
    
    
  }
  
  
  
  
}


highlightWords(paragraph, colours);
