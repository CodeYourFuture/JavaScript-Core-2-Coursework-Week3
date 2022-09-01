function readingList(books) {
  let colors = ["red", "green", "green"];
  let container = document.getElementById("content");
  let ul = document.createElement("ul");
  container.appendChild(ul);

  // LOOP THROUGH BOOKS ARRAY

  books.forEach((book, index) => {
    let div = document.createElement("div");
    ul.appendChild(div);
    div.style.backgroundColor = colors[index % 3];
    div.style.margin = "20px auto";
    div.style.width = "90%";

    let li = document.createElement("li");
    div.appendChild(li);
    li.innerHTML = `${book.title} by ${book.author}`;
    li.style.paddingBottom = "20px";
    li.style.fontSize = "18px";
    li.style.fontWeight = "700";

    let img = document.createElement("img");
    div.appendChild(img);
    img.src = book.bookCoverImage;
    img.style.width = 220;
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
