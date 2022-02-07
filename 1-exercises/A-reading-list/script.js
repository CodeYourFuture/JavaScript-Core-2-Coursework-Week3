function readingList(books) {

let content = document.getElementById("content");

// Create UL

let bookList = document.createElement("ul");
content.appendChild(bookList);

// loop through books array

books.map(book => {
  let bookListItem = document.createElement("li");
  bookList.appendChild(bookListItem);

// add p tag with Book Title and Book Author

  let bookTitleAuthor = document.createElement("p");
  bookTitleAuthor.innerText = `${book.title} by ${book.author}`;
  bookListItem.appendChild(bookTitleAuthor);

// add image links

  let bookCover = document.createElement("img");
  bookCover.src = book.bookCoverImage;
  bookListItem.appendChild(bookCover)

// read book? background color 
  book.alreadyRead ? bookListItem.style.backgroundColor = "green": bookListItem.style.backgroundColor = "red";

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