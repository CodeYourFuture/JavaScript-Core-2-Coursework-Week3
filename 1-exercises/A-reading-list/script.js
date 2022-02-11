function readingList(books) {
  // Write your code here...
  let contain = document.querySelectorAll("#content");
  console.log(contain[0]);
  let mylist = document.createElement("ul");
  contain[0].appendChild(mylist);

  books.forEach((book) => {
    let myUlist = document.createElement("li");
    let myNewParagraph = document.createElement("p");
    let myNewImage = document.createElement("img");
    myUlist.appendChild(myNewParagraph);
    myUlist.appendChild(myNewImage);
    mylist.appendChild(myUlist);
    myNewParagraph.innerText = `${book.title} by ${book.author}`;
    myNewImage.src = book.bookCoverImage;
    if (book.alreadyRead) {
      myUlist.classList.add("back-ground-colour--read");
    } else {
      myUlist.classList.add("back-ground-colour--unread");
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
