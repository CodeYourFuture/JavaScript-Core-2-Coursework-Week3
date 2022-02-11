const content = document.querySelector("#content");

function readingList(books) {
  const unorderedList = document.createElement("ul");
  unorderedList.classList.add("books");

  books.forEach((book) => {
    const listElement = document.createElement("li");
    listElement.classList.add("book-description");

    if (book.alreadyRead === true) {
      listElement.classList.add("read");
    } else {
      listElement.classList.add("unread");
    }

    const paragraph = document.createElement("p");
    paragraph.classList.add("title-and-author");
    paragraph.innerHTML = `${book.title} by ${book.author}`;
    listElement.appendChild(paragraph);

    const image = document.createElement("img");
    image.src = book.bookCoverImage;
    listElement.appendChild(image);

    unorderedList.appendChild(listElement);
  });

  content.appendChild(unorderedList);
}

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
