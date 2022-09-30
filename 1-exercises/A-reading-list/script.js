function readingList(books) {
  // Write your code here...
  let container = document.querySelector("#content");
  books.forEach((book) => {
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    let uList = document.createElement("ul");
    let item = document.createElement("li");

    paragraph.textContent = `${book.title} By ${book.author}`;
    image.src = book.bookCoverImage;

    item.append(paragraph, image);
    uList.append(item);
    container.append(uList);

    item.style.textAlign = "center";
    uList.style.listStyle = "none";
    paragraph.style.fontSize = "2rem";
    paragraph.style.fontWeight = "bold";
    paragraph.style.paddingTop = "1em";
    container.style.width = "850px";
    container.style.margin = "auto";
    image.style.paddingBottom = "3em";

    book.alreadyRead
      ? (item.style.background = "green")
      : (item.style.background = "red");
  });
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
