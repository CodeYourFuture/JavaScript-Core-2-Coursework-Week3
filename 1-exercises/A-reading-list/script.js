{/* <div id "content" >
  <ul>
    <li>
      <p></p>
      <img>
    </li>
  </ul>
</div> */}
function readingList(books) {
  let display = document.querySelector("#content");
  let createUl = document.createElement("ul");
  display.appendChild(createUl);
  books.forEach(book => {
    let createList = document.createElement("li");
    createUl.appendChild(createList);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `${book.title} by ${book.author}`;
    createList.appendChild(paragraph);
    let image = document.createElement("img");
    image.src = book.bookCoverImage;
    createList.appendChild(image);
    if (book.alreadyRead === false) {
      createList.style.backgroundColor = "red";
    } else {
      createList.style.backgroundColor = "green";
    }


  });

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