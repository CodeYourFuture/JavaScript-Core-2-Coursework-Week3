const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage:
      'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

let content = document.querySelector("#content");
let unorderedList = document.createElement("ul");

function readingList(books) {


 books.forEach((book) => {

  let paragraph = document.createElement("p");
  paragraph.innerText = book.title + " by " + book.author; 

  let bookImage = document.createElement("img");
  bookImage.src = book.bookCoverImage;
  bookImage.width = "200";
  bookImage.height = "300";

  let listItem = document.createElement("li");
  if(book.alreadyRead === true){
    listItem.className = "green"
  }else{
    listItem.className = "red"
  }

  listItem.appendChild(paragraph);
  listItem.appendChild(bookImage);
  unorderedList.appendChild(listItem);
  content.appendChild(unorderedList);

 });
 
}
 

console.log(readingList(books));

