function readingList(books) {
  let ulTag = document.createElement("ul");
  let contentTag = document.querySelector("#content");
  contentTag.appendChild(ulTag);
  books.forEach(item => {
    let liTag = document.createElement("li");
    ulTag.appendChild(liTag);
    let pTag = document.createElement("p");
    liTag.appendChild(pTag);
    let aTag = document.createElement("a");
    liTag.appendChild(aTag);
    let imgTag = document.createElement("img");
    aTag.appendChild(imgTag);
    pTag.innerText = `${item.title} by ${item.author}`;
    imgTag.src = item.bookCoverImage;
    aTag.href = item.bookCoverImage;
    item.alreadyRead ? liTag.style.background = "green" : liTag.style.background = "red"
    liTag.className = "list_item";
    imgTag.classList.add("img_tag")
    pTag.addEventListener("click", () => {
      imgTag.classList.toggle("move");
    })
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