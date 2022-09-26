function readingList(books) {
  // Write your code here...
  const numberOfBooks = books.length;
  var list = document.createElement("ul");
  const content = document.getElementById("content");
  content.appendChild(list);
  document.body.style.fontSize = "30px";
  for (let i = 0; i < numberOfBooks; i++) {
    let listMember = document.createElement("li");
    let titleAndAuthorTag = document.createElement("p");
    let titleAndAuthorText = document.createTextNode(
      `${books[i].title}  ${books[i].author}`
    );
    let image = document.createElement("img");
    image.src = books[i].bookCoverImage;
    titleAndAuthorTag.appendChild(titleAndAuthorText);
    listMember.appendChild(titleAndAuthorTag);
    listMember.appendChild(image);
    list.appendChild(listMember);
    if (books[i].alreadyRead) {
      listMember.style.background = "red";
    } else {
      listMember.style.background = "green";
    }
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
