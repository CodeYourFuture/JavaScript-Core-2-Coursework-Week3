const content = document.getElementById("content");

function readingList(books) {
  // Write your code here...
  const list = document.querySelector("#reading-list");
  books.forEach((book) => {
    const listItem = document.createElement("li");
    if (book.alreadyRead) {
      listItem.className = "bookRead";
    }else {
      listItem.className = "bookNotRead";
    }

    const newParagraph = document.createElement("p");
    newParagraph.innerText = `${book.author} ${book.title}`;
    listItem.appendChild(newParagraph);
    const newImg = document.createElement("img");
    newImg.src = book.bookCoverImage;
    newImg.className = "book-image-cover"
    listItem.appendChild(newImg);
    list.appendChild(listItem);

  });
  content.appendChild(readingList);
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
