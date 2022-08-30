function readingList(books) {
  // Write your code here...
const allBook = document.querySelector('id');
const p = document.createElement('p')
allBook.append(p)

p.innerText = 'books.tile'
}



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

// readingList(books);
const firstDiv = document.getElementById('content');
function div(){
for (const book of books) {
   content += `<div class="card">
  <img class="card--avatar" src=${book.bookCoverImage}>
  <p class="card--title">${book.title}</p>
  <p class="card--title">${book.author}</p>
  <p class="card--title">${book.alreadyRead}</p>
  </div>
`
 
}
firstDiv.innerHTML = content

};
div()

