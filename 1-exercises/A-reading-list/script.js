function readingList(books) {
  // Write your code here...
  let newDiv = document.getElementById("content");
  let newList = document.createElement("ul");
  newDiv.appendChild(newList);
  let newLi = [];
  let newParagraph = [];
  let newImage = [];
  for (let i in books) {
    newLi[i] = document.createElement("li");
    newParagraph[i] = document.createElement("p");
    newImage[i] = document.createElement("img");

    newList.appendChild(newLi[i]);
    newLi[i].appendChild(newParagraph[i]);
    newLi[i].appendChild(newImage[i]);
    if (books[i].alreadyRead) newLi[i].style.backgroundColor = "green";
    else newLi[i].style.backgroundColor = "red";
    newParagraph[i].innerText = `${books[i].title} by ${books[i].author}`;
    newImage[i].src = books[i].bookCoverImage;
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
