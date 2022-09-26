function readingList(books) {
  // Write your code here...

  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  for (let i = 0; i < books.length; i++) {
    ul.appendChild(document.createElement("li"));
    let li = document.querySelectorAll("li");
    li[
      i
    ].innerHTML = `${books[i].title} by ${books[i].author}<br><br><img src = '${books[i].bookCoverImage}'/>`;
    books[i].alreadyRead
      ? (li[i].style.backgroundColor = "green")
      : (li[i].style.backgroundColor = "red");
    li[i].style.marginTop = "20px";
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
