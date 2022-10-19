function readingList(books) {
  // Write your code here..
  const getParentElement = document.querySelector("#content");
  
  const ulElement = document.createElement("ul");

  for (let book of books) {
    const liElement = document.createElement("li");

    const pElement = document.createElement("p");
    pElement.innerText = `${book.title} By ${book.author}`;
    liElement.appendChild(pElement);

    if (book.alreadyRead === true) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }

    ulElement.appendChild(liElement);

    const imgElement = document.createElement("img");
    imgElement.src = book.bookCoverImage;
    liElement.appendChild(imgElement);
  }
  getParentElement.appendChild(ulElement);
  ulElement.style.width = 90 + "vw"
}

const AmazonBooks = [
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

readingList(AmazonBooks);
