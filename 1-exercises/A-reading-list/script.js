function readingList(books) {
  let unOrderedList = document.createElement("ul");
  books.forEach((book) => {
    let list = document.createElement("li");
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    image.src = book.bookCoverImage;
    paragraph.innerHTML = `${book.title} by ${book.author}`;
    list.appendChild(paragraph);
    list.appendChild(image);
    unOrderedList.appendChild(list);
    if (book.alreadyRead) {
      list.className = "greenColor";
    } else {
      list.className = "redColor";
    }
  });

  let divEl = document.body.querySelector("#content");
  divEl.appendChild(unOrderedList);
  // Write your code here...
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