function readingList(books) {
  // Write your code here...

  // 1-create  2- manipulate  3-append 
  let reed = document.querySelector("#reading-list")
    books.forEach(book => {
    let listItem = document.createElement("li");

    let paragraph = document.createElement("p") ;
    paragraph.innerText = `${book.title }`+`${book.author}` ;
    listItem.appendChild(paragraph);

    let imageTag = document.createElement("img");
    imageTag.src = book.bookCoverImage;
    listItem.appendChild(imageTag);

    if(book.alreadyRead){
      listItem.className ="book-reed";
    }else{
      listItem.className = "book-not-reed";
    } ;


   reed.appendChild(listItem);
   
  }
  )
    


  
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
