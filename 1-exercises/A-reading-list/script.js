function readingList(books) {

  for (let book of books) {
  
  let content = document.querySelector('#content');
  const booksList = document.createElement("ul");
  content.appendChild(booksList);

  const booksListItem = document.createElement("li");
  booksList.appendChild(booksListItem);

  const paragraph = document.createElement("p");
  paragraph.innerText = `${book.title} by ${book.author}`;
  booksListItem.appendChild(paragraph); 

  const image = document.createElement("img");
  image.src = `${book.bookCoverImage}`;
  booksListItem.appendChild(image);

  if (book.alreadyRead) {
    booksList.style.backgroundColor = "green";
  }else{
    booksList.style.backgroundColor = "red";
  }
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

