function readingList(books) {
  // Write your code here...
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
let mainDiv = document.querySelector("#content");
for (let book of books) {
  const unorderedList = document.createElement("ul");
  const theListItems = document.createElement("li");
  const pelement = document.createElement("p");
  const images = document.createElement("img");
  images.src = book.bookCoverImage;
  pelement.textContent = `${book.title}:by ${book.author}`;
  theListItems.appendChild(pelement);
  theListItems.appendChild(images);
  unorderedList.appendChild(theListItems);
  mainDiv.appendChild(unorderedList);
  console.log(unorderedList);
}
