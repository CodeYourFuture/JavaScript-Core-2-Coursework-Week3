
function readingList(books) {
  const content = document.querySelector("#content");

  const ul = document.querySelector("#reading-list");
  
  books.forEach((book) => {
    const li = document.createElement("li");
    li.classList.add("book-item");

    const p = document.createElement("p");
    p.innerText = `${book.title} by ${book.author}`;
    li.appendChild(p);

    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    li.appendChild(img);

    if (book.alreadyRead) {
      li.classList.add("read");
    } else {
      li.classList.add("not-read");
    }

    ul.appendChild(li);
  });

  content.appendChild(ul);
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
