function readingList(books) {
  // Write your code here...
  const readingList = document.querySelector("#reading-list");

  books.forEach((book) => {
    const li = document.createElement('li');
    const titleName = document.createElement('h1');
    const authorName = document.createElement('h2');
    const alreadyRead = document.createElement('p');
    const imageName = document.createElement('img');

    titleName.innerText = book.title;
    authorName.innerText = book.author;
    imageName.src = book.bookCoverImage;
    alreadyRead.innerText = book.alreadyRead ? 'Read' : 'Up-Next';
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    li.appendChild(titleName);
    li.appendChild(authorName);
    li.appendChild(alreadyRead);
    li.appendChild(imageName);
    readingList.appendChild(li);


  })
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
