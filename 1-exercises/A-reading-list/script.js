function readingList(books) {
  books.forEach((book) => {
    let divEl = document.body.querySelector("#content");
    let newPar = document.createElement("p");
    newPar.innerText = `${book.title} by ${book.author}`;
    let imgEl = document.createElement("img");
    imgEl.src = book.bookCoverImage;
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    newPar.appendChild(imgEl);
    li.appendChild(newPar);
    ul.appendChild(li);
    divEl.appendChild(ul);
    if (book.alreadyRead === false) {
      newPar.classList.add("red");
    } else {
      newPar.classList.add("green");
    }
  });
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
