function readingList(books) {
  // Write your code here...

  for (const book of books) {
    const para = document.createElement("p");
    const paraList = document.createElement("li");
    const textNode = document.createTextNode(book.title + "by" + book.author);
    const imgElement = document.createElement("img");
    imgElement.src = book.bookCoverImage;
    para.appendChild(textNode);
    paraList.appendChild(para);
    paraList.appendChild(imgElement);
    if (book.alreadyRead === true) {
      const element = document.querySelector("#reading-list");

      element.appendChild(paraList);
      paraList.classList.add("green");
    } else if (book.alreadyRead === false) {
      const element = document.querySelector("#reading-list");

      element.appendChild(paraList);
      paraList.classList.add("red");
    }
  }
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
