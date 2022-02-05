function highlightWords(paragraph, colours) {
  let currColor = '';
  document.querySelector('body').style.backgroundImage = 'url(https://images.unsplash.com/photo-1529072718168-514a0d4ad1ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80)';
  document.querySelector('body').style.minHeight = '100vh';
  document.querySelector('body').classList.add('d-flex', 'align-items-center', 'justify-content-center');
  const container = document.getElementById('content');
  container.classList.add('bg-light', 'text-dark', 'p-3');
  container.style.maxWidth = '80%';
  const select = document.createElement('select');
  select.setAttribute('id', 'colorPicker');
  select.classList.add('form-select-lg', 'mb-3');
  select.addEventListener('change', (e) => {
    currColor = e.target.value;
  });

  const optionNone = document.createElement('option');
  optionNone.value = '';
  optionNone.text = 'None';
  select.appendChild(optionNone);

  colours.forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.text = color;
    select.appendChild(option);
  });
  container.appendChild(select);
  const paragraphHTML = document.createElement('p');
  paragraphHTML.classList.add('bg-light');
  paragraph.split(' ').forEach((word, id) => {
    const wordHTML = document.createElement('span');
    wordHTML.setAttribute('id', `word${id}`);
    wordHTML.innerText = `${word} `;
    wordHTML.addEventListener('click', () => {
      document.getElementById(`word${id}`).style.backgroundColor = currColor;
    });

    paragraphHTML.appendChild(wordHTML);
  });
  container.appendChild(paragraphHTML);
}

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.';

const colours = ['yellow', 'green', 'blue', 'none'];

highlightWords(paragraph, colours);
