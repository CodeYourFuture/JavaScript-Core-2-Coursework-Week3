function readingList(books){
const readingList = document.querySelector("#reading-list");
books.forEach(book => {
    const li = document.createElement("li");

    const titleText = document.createElement("p");
    titleText.innerText = book.title;
    li.appendChild(titleText);

    const authorText = document.createElement("p");
    authorText.innerText = book.author;
    li.appendChild(authorText);

    const imageElelment = document.createElement("img"); 
    imageElelment.src = book.bookCoverImage;
    li.appendChild(imageElelment);

    if (book.alreadyRead)  li.style.backgroundColor ="green" ;
    else li.style.backgroundColor = "red" ;
    readingList.appendChild(li);
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