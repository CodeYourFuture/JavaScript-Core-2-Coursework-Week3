function readingList(books) {
  let ulEl = document.createElement("ul");
  let contentTag = document.querySelector("#content");
  contentTag.appendChild(ulEl);
  books.forEach(obj => {

    let liEl = document.createElement("li");
    ulEl.appendChild(liEl);

    let pEl = document.createElement("p");
    liEl.appendChild(pEl);
    let aEl = document.createElement("a");
    liEl.appendChild(aEl);

    let imgEl = document.createElement("img");
    aEl.appendChild(imgEl);

    aEl.href = obj.bookCoverImage;
    pEl.innerText = `${obj.title}  by ${obj.author}`;
    imgEl.src = obj.bookCoverImage;


    obj.alreadyRead ? liEl.style.backgroundColor = "green" : liEl.style.backgroundColor = "red";
    liEl.className = "booksList";

  });
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780465050659.jpg',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    bookCoverImage: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
    bookCoverImage: 'https://blackwells.co.uk/jacket/l/9780135957059.jpg',
  },
];

readingList(books);