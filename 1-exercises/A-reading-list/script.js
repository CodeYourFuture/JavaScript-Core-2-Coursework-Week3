let content = document.querySelector("#content")
let takeUL = document.querySelector("#reading-list")


function readingList(books) {
  
  books.forEach((book) => {
    let listElement = document.createElement("li")

    let createP = document.createElement("p") 
    createP.innerText = `${book.title} , ${book.author}`

    let createImage = document.createElement("img")
    createImage.src = book.bookCoverImage 
    createImage.classList.add("image")

    
    listElement.appendChild(createP)
    listElement.appendChild(createImage)
    takeUL.appendChild(listElement)
    content.appendChild(takeUL)
    
    if (book.alreadyRead == true){
      listElement.classList.add("greenMark")
    } else {
      listElement.classList.add("redMark")
      }
  });
  
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


