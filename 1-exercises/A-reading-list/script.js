function readingList(books) {
  let ul = document.createElement("ul");
  content.appendChild(ul)

  for (let book of books) {
    let pElement = document.createElement("p");
    pElement.innerText = `${book.title} by ${book.author}`;
    
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", book.bookCoverImage)
  
    let li = document.createElement("li")
    
    li.appendChild(pElement);
    li.appendChild(imgElement);
    ul.appendChild(li);

    if(book.alreadyRead){
      li.classList.add("green")
    }else {
      li.classList.add("red")
    }
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
