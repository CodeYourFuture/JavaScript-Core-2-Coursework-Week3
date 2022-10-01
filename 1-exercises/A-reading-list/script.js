function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");
  books.forEach((book) => {
    let paragraph = document.createElement("p");
    let image = document.createElement("img");
    let unorderedList = document.createElement("ul");
    let listItem = document.createElement("li");

    content.style.display = "flex";
    content.style.flexDirection = "column";
    paragraph.innerText = `${book.title} by ${book.author}`;
    image.src = book.bookCoverImage;
    listItem.style.listStyleType = "none";
    paragraph.style.fontSize = "1.5rem";

    listItem.append(paragraph, image);
    unorderedList.append(listItem);
    content.append(unorderedList);

    book.alreadyRead
      ? (listItem.style.backgroundColor = "green")
      : (listItem.style.backgroundColor = "red");
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
