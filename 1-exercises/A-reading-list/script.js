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

const readingList = (books) => {
  let mainContent = document.querySelector("#content");
  let unOrderedList = document.createElement("ul");
  mainContent.appendChild(unOrderedList);

  books.forEach((book) => {
    let bookAuthorTitle = document.createElement("p");
    bookAuthorTitle.innerText = book.title + " by " + book.author;

    let imgUrl = document.createElement("img");
    imgUrl.src = book.bookCoverImage;
    imgUrl.className = "bookImg";

    let list = document.createElement("li");
    list.appendChild(bookAuthorTitle);
    list.appendChild(imgUrl);
    unOrderedList.appendChild(list);

    list.classList.add(book.alreadyRead ? "green" : "red");
    list.classList.add("listWidth");
  });
};

readingList(books);
