function readingList(books) {
  let ulElement = document.createElement("ul")
  content.appendChild(ulElement)
  for (let book of books) { 
    let pElement = document.createElement("p")
    
    pElement.innerText = `${book.title} by ${book.author} `

    let imgElement = document.createElement("img")
    imgElement.setAttribute("src", book.bookCoverImage)
  


    
    let liElement = document.createElement("li")
    liElement.appendChild(pElement)
    liElement.appendChild(imgElement)
    ulElement.appendChild(liElement)

    if (book.alreadyRead) {
      liElement.classList.add("green");
    } else {
      liElement.classList.add("red")
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

