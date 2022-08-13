function readingList(books) {
  // Write your code here...
  const content = document.querySelector("#content");
  const ul = document.createElement("ul");
  
  books.forEach(elem => {
    const p = document.createElement("p");
    const img = document.createElement("img");
    const li = document.createElement("li");

    p.appendChild(document.createTextNode(`"${elem.title}" by ${elem.author}`))
    li.appendChild(p);
    img.setAttribute("src", elem.bookCoverImage);
    li.appendChild(img)
    ul.appendChild(li)

    if(elem.alreadyRead)
      li.className = "green";
    else
      li.className = "red";
  });

  content.appendChild(ul);
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