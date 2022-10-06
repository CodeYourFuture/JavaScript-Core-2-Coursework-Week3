function readingList(books) {
  const content = document.querySelector("#content");
  books.forEach((book) => {
    let paragraphEl = document.createElement("p");
    let imageEl = document.createElement("img");
    let unorderedListEl = document.createElement("ul");
    let listItemEl = document.createElement("li");

    paragraphEl.innerText = `${book.title} by ${book.author}`;
    imageEl.src = book.bookCoverImage;
    paragraphEl.style.fontSize = "1.5rem";
    imageEl.style.width = "350px"
    
    listItemEl.append(paragraphEl, imageEl);
    unorderedListEl.append(listItemEl);
    content.append(unorderedListEl);

    listItemEl.style.backgroundColor = (book.alreadyRead) ? 'green' :'red'
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