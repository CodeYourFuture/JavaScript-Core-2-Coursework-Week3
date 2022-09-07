const mainDiv = document.getElementById('content');
const p = document.createElement('p');
function readingList(books) {
  // Write your code here...re
 const book =  books.map(item =>{
    return `<p>${item.title}</p>
    <p>${item.author}</p>
    <ul>
      <li class="color">${item.alreadyRead}</li>
    </ul>
    <img src=${item.bookCoverImage} alter =${item.bookCoverImage}>`
  }).join('');
 
   mainDiv.innerHTML = book;
   const bck = document.querySelectorAll('.color');
    bck.forEach(el =>{
      if(el.textContent){
       el.classList.add('green');
      }else {
        el.classList.add('red');
      }
    });
};


const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);