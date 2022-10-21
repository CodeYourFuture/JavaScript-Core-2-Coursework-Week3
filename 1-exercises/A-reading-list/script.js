const content = document.getElementById("content");
content.className = "navbar-brand alert";
content.style.alignItems = "center";
//💫💫💫
function readingList(books) {
  books.forEach((e) => {
    let ul = document.createElement("ul");
    let p = document.createElement("p");
    let li = document.createElement("li");
    let img = document.createElement("img");
    content.style.margin = "1rem 2rem";

    p.textContent = `${e.title} by ${e.author}`;
    e.alreadyRead
      ? (ul.style.backgroundColor = "green")
      : (ul.style.backgroundColor = "red");
    e.bookCoverImage
      ? (img.src = e.bookCoverImage)
      : (img.src =
          "https://avatars.githubusercontent.com/u/22743767?s=280&v=4");
    content.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(img);
  });

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

readingList(books);
