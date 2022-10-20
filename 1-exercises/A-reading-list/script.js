function readingList(books) {
const content = document.querySelector("#content"); // select div tag by id 
const ulElement = document.createElement("ul"); // create a new ul tag
for(let i=0 ; i < books.length;i++){
  // loop  in books array
  const liElement = document.createElement("li"); //// create a new li tag
  const images = document.createElement("img"); //// create a new img tag
  const header = document.createElement("h1"); // // create a new  h1 tag

  header.innerHTML = books[i].title; // display header from titile of object
  images.src = books[i].bookCoverImage; // git the ing src from bookCoverImage in object
  images.alt = books[i].author; // git alt to img tag from  bookCoverImage in object
  if (books[i].alreadyRead == true) { // if the book it's read 
    liElement.style.backgroundColor = "green"; // cheange a color to green 
  } else {
    liElement.style.backgroundColor = "red"; // if it's not read cheange a color to red
  }
  liElement.appendChild(header); // header it's child of li tag 
  liElement.appendChild(images);// img tag it's child of li tag 
  ulElement.appendChild(liElement);// li tag it's child of ul tag 
}
content.appendChild(ulElement)// ul tag it's child of div tag 
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