function readingList(books) {
    let div = document.createElement("div");
    if (books.alreadyRead === true) {
      div.style.backgroundColor = "green"
    } else {
      div.style.backgroundColor = "red"
    }
      

    let paragraph = document.createElement("p");
    let ul = document.createElement("ul")
    let li = document.createElement("li");
    let image = document.createElement("img");
    image.setAttribute("src", books.bookCoverImage);

    div.appendChild(paragraph);
    div.appendChild(image);
    li.appendChild(div);
    ul.appendChild(li)
    content.appendChild(ul)
   
    paragraph.innerText = `${books["title"]} by ${books["author"]}`;
 
  // Write your code here...
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

let content = document.querySelector("#content")

let ul = document.createElement("ul")

books.forEach((book) => {
  readingList(book)
})


