function readingList(books) {
  // Write your code here...
  let div = document.getElementById("content");
  let section = document.createElement("ul");
  div.append(section);

  for (let el of books) {
    let list = document.createElement("li");
    section.append(list);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${el.title} by ${el.author}`;
    list.append(paragraph);
    let image = document.createElement("img");
    image.src = el.bookCoverImage;
    list.append(image);

    if (el.alreadyRead === true) {
      list.style.backgroundColor = "green";
    } else {
      list.style.backgroundColor = "red";
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
