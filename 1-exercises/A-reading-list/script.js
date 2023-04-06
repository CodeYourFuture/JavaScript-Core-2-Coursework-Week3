
function readingList(books) {

  let unorderedList = document.getElementById("reading-list");

  for (book of books) {
    let listItem = document.createElement("li");

    let paragraph = document.createElement("p");
    paragraph.innerText = book.title;

    let image = document.createElement("img");
    image.src = book.bookCoverImage;

    unorderedList.appendChild(listItem);
    listItem.appendChild(paragraph);
    listItem.appendChild(image);

    if (book.alreadyRead) {
      listItem.style.backgroundColor = "Green";
    } else {
      listItem.style.backgroundColor = "Red";
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



