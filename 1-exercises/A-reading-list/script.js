function readingList(books) {
  const container = document.getElementById('content');
  let booksHTML = '';
  books.forEach((book) => {
    const bgColor = book.alreadyRead ? 'green' : 'red';
    booksHTML = booksHTML.concat(`<li class="list-group-item d-flex flex-column align-items-center mb-1" style="background-color:${bgColor}">
    <p class="text-md-center font-weight-bold text-light">${book.title} by ${book.author}</p>
    <img style="max-width: 300px" src="${book.bookCoverImage}" />    
    </li>`);
  });
  container.insertAdjacentHTML('beforeend', `<ul class="list-group" style="margin:4rem 4rem">${booksHTML}</ul>`);
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

readingList(books);
