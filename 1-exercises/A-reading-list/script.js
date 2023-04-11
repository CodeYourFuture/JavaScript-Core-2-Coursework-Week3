function readingList(books) {
  let myExistingDIv=document.querySelector(`#content`)
  let ulElement=document.createElement(`ul`);
  
  myExistingDIv.appendChild(ulElement);
  
  for (let book of books){
  let liElement=document.createElement(`li`);
  ulElement.appendChild(liElement);
  
  let titleOfBook=document.createElement("p");
  titleOfBook.innerText=`${book.title}`;
  
  let authorOfBook=document.createElement("p");
  
  authorOfBook.innerText=`${book.author}`;
  
  let CoverOfBook=document.createElement("img");
  CoverOfBook.src=`${book.bookCoverImage}`;
  
  liElement.appendChild(titleOfBook);
  liElement.appendChild(authorOfBook);
  liElement.appendChild(CoverOfBook);
  if (book.alreadyRead){
    liElement.style.backgroundColor="green"
  }else{
    liElement.style.backgroundColor="red"
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