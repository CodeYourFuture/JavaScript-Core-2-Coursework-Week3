const mainDiv = document.querySelector('#content')
function readingList(books) {
  for (let book of books) {
    const individualBookDiv = document.createElement('div');
    individualBookDiv.classList.add('book-size')
    const heading = document.createElement('h1');
    const image = document.createElement('img');
    heading.innerText = `${book.title} by ${book.author}`
    individualBookDiv.appendChild(heading);
    image.src = book.bookCoverImage;
    individualBookDiv.appendChild(image)
    if (book.alreadyRead) {
      individualBookDiv.classList.add('green');

    } else (
      individualBookDiv.classList.add('red')
    )
    mainDiv.appendChild(individualBookDiv);

  }
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