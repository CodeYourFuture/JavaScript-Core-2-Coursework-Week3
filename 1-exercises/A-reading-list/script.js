function readingList(books) {
  // Write your code here...

  const selectContent = document.querySelector("#content");
  const createList = document.createElement("ul");
  selectContent.appendChild(createList);

books.forEach((book)=>{
const list = document.createElement("li");
createList.appendChild(list);

const elementParagraph = document.createElement("p");
elementParagraph.innerHTML = `${book.title} : ${book.author}`;
list.appendChild(elementParagraph);

const elementImage = document.createElement("img");
elementImage.src = book.bookCoverImage;
list.appendChild(elementImage);
if (book.alreadyRead === false){
  list.style.backgroundColor = "red";
}else{
  list.style.backgroundColor = "green";
}
})
}

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

readingList(books);