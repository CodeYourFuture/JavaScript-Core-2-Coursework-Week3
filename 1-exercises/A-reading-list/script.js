function readingList(books) {
   for (i = 0; i < books.length; i++){
    let elementLi = document.createElement("li");

    let elementP = document.createElement("p");
    let bookInfo = books[i].title + " by " + books[i].author;
    elementP.textContent = bookInfo;
    
    if(books[i].alreadyRead === true){
      elementLi.classList.add("green");
    }else {
      elementLi.classList.add("red");
    }

    let elementImg = document.createElement("img");
    let bookUrl = books[i].bookCoverImage;
    elementImg.src = bookUrl;
   

    elementLi.appendChild(elementP);
    elementLi.appendChild(elementImg);
    let elementUl = document.querySelector("#reading-list");
    elementUl.appendChild(elementLi);
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
