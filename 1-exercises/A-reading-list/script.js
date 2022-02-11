function readingList(books) {
  let ulContainer = document.getElementById("content");
  let newUl = document.createElement("ul");

  ulContainer.appendChild(newUl);
  ulContainer.style.margin = "0 40px";

  let newLi = [];
  let bookTxt = [];
  let bookImg = [];

  for (i in books) {
    newLi[i] = document.createElement("li");
    newLi[i].style.backgroundColor = books[i].alreadyRead ? "green" : "red";
    newLi[i].style.padding = "5px 20px";
    newLi[i].style.margin = "20px";
    newUl.appendChild(newLi[i]);

    bookTxt[i] = document.createElement("p");
    bookTxt[i].innerText = `${books[i].title} by ${bookTxt[i].author}`;
    newLi[i].appendChild(bookTxt[i]);

    bookImg[i] = document.createElement("img");
    bookImg[i].src = books[i].bookCoverImage;
    newLi[i].appendChild(bookImg[i]);
  }
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
