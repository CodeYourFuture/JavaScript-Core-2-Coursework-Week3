function readingList(books) {
  // Write your code here...
   const ul = document.createElement("ul");

  books.forEach((book) => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    p.textContent = `${book.title} - ${book.author}`;
    img.src = book.bookCoverImage;
    img.alt = book.title;

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);

    if (book.alreadyRead) {
      li.classList.add("read");
    } else {
      li.classList.add("unread");
    }
  });

  const contentDiv = document.getElementById("content");
  contentDiv.appendChild(ul);
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
