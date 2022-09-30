function readingList(books) {
  let content = document.getElementById("content");
  let ulList = document.createElement("ul");
  content.appendChild(ulList);

  books.forEach((book) => {
    let list = document.createElement("li");
    let paragraph = document.createElement("p");
    let image = document.createElement("img");

    //Element content added
    paragraph.textContent = book.title + "by" + book.author;
    image.src = book.bookCoverImage;

    list.appendChild(paragraph);
    paragraph.parentNode.appendChild(image);
    ulList.appendChild(list);

    if (book.alreadyRead) {
      list.style.backgroundColor = "green";
    } else {
      list.style.backgroundColor = "red";
    }
  });
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
