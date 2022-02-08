function readingList(books) {
  // Write your code here...
  let divContent = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  divContent.appendChild(ulElement);

  for (let book of books) {
    let liElement = document.createElement("li");
    let divInner = document.createElement("div");
    divInner.style.width = "95%";
    let pElement = document.createElement("p");
    let pText = document.createTextNode(book.title + " by " + book.author);
    pElement.appendChild(pText);
    pElement.style.fontSize = "20px";
    pElement.style.fontWeight = "500";

    let imgElement = document.createElement("img");
    imgElement.classList.add("book-img");
    imgElement.src = book.bookCoverImage;

    let colorClass = book.alreadyRead ? "green" : "red";
    divInner.classList.add(colorClass);

    ulElement.appendChild(liElement);
    liElement.appendChild(divInner);
    divInner.appendChild(pElement);
    divInner.appendChild(imgElement); 
  };
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
