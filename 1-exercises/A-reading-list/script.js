function readingList(books) {
  let divContent = document.querySelector('#content');
  let createUlTag = document.createElement('ul');
divContent.appendChild(createUlTag);

books.forEach((book) => {
  let createLiTag = document.createElement('li');
  createUlTag.appendChild(createLiTag);
  
  let createP = document.createElement('p');
  createP.textContent = `${book.title} by ${book.author}`;
  createLiTag.appendChild(createP);

  let addImg = document.createElement('img');
  addImg.src = book.bookCoverImage;
  createLiTag.appendChild(addImg);
  
  book.alreadyRead ? createLiTag.style.backgroundColor = "green" : createLiTag.style.backgroundColor  = 'red';

  })
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