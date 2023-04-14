function readingList(books) {
      let contentEle = document.querySelector("#content");
      let unorderedList = document.querySelector("#reading-list");

      for (const book of books) {
        let listItem = document.createElement("li");

        listItem.classList.add("li-item");
        if (book.alreadyRead) {
          listItem.classList.add("green");
        } else {
          listItem.classList.add("red");
        }
        let paraEle = document.createElement("p");
        paraEle.innerText = `${book.title} by ${book.author} `;
        listItem.appendChild(paraEle);
        let imageEle = document.createElement("img");
        imageEle.src = book.bookCoverImage;
        listItem.appendChild(imageEle);
        unorderedList.appendChild(listItem);
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
