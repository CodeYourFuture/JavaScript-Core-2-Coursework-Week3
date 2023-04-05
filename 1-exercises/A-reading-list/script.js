function readingList(books) {
  // Write your code here...
  // same as what we learned from CYF Blocks , same exact steps :)
  books.map((eachBook) => {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const image = document.createElement("img");

    title.innerText = eachBook.title;
    author.innerText = eachBook.author;
    image.src = eachBook.bookCoverImage;
    li.style.backgroundColor = eachBook.alreadyRead ? "green" : "red";

    li.appendChild(title);
    li.appendChild(author);
    li.appendChild(image);

    document.querySelector("#reading-list").appendChild(li);
  });
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
