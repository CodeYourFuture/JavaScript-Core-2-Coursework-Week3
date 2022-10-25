function readingList(books) {
  // Write your code here...

const content = document.querySelector('#content');
const ul = document.createElement('ul');
content.appendChild(ul);
for(const i = 0; i < books.length; i++) {
    const list = document.createElement("li");
    ul.appendChild(list);
    const newParagraph = document.createElement('p');
    newParagraph.innerText = `${books[i].title} - ${books[i].author}`;
    list.appendChild(newParagraph);
    const image = document.createElement("img");
    image.src = books[i].bookCoverImage;
    list.appendChild(image);
    if (books[i].alreadyRead === true) {
      list.style.backgroundColor = "green";
    } else {
      list.style.backgroundColor = "red";
    }
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