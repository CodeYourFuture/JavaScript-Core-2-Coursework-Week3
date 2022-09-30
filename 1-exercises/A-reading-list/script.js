function readingList(books) {
  var place = document.getElementById("content");
  var list = document.createElement("ul");
  place.appendChild(list);

  for (var i = 0; i < books.length; i++) {
    var lists = document.createElement("li");
    list.appendChild(lists);
    var lineText = document.createElement("p");
    lineText.className = "heading-underline";
    lists.appendChild(lineText);
    var pics = document.createElement("img");
    pics.className = "image";
    lists.appendChild(pics);
    if (books[i].alreadyRead === true) {
      lineText.innerHTML = books[i].title + " by " + books[i].author;
      pics.src = books[i].bookCoverImage;
      lists.className = "green ";
    } else {
      lineText.innerHTML = books[i].title + " by " + books[i].author;
      pics.src = books[i].bookCoverImage;
      lists.className = "red";
    }
  }
  // for (var x in books) {
  //   if (books[x].alreadyRead == true) {
  //     lineText.innerHTML = books[x].title + " by " + books[x].author;
  //     pics.src = books[x].bookCoverImage;
  //   } else {
  //     lineText.innerHTML = books[x].title + " by " + books[x].author;
  //     pics.src = books[x].bookCoverImage;
  //   }
  // }
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
