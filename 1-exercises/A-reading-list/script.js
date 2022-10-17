let parentElement = document.querySelector("#content")
function readingList(books) {
  for (let key in books) {
    //create list
    let ulList = document.createElement("ul");
    let liList = document.createElement("li");
    //title
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${books[key].title} by ${books[key].author} `
    //image
    let picture = document.createElement("IMG");
    picture.setAttribute("src",books[key].bookCoverImage);
    //style
    liList.style.backgroundColor = books[key].alreadyRead ? "green" : "red";
    //append
    liList.appendChild(paragraph)
    liList.appendChild(picture)
    ulList.appendChild(liList)
    parentElement.appendChild(ulList)
}
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