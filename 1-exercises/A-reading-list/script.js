function readingList(books) {
  // Write your code here...
const divVar = document.querySelector("#content");
const ulTag = divVar.appendChild(document.createElement("ul"));

for (let x in books) {
    
  const liTags = ulTag.appendChild(document.createElement("li"));

  const pTags = liTags.appendChild(document.createElement("p"));  
  pTags.textContent = `${books[x].title} - ${books[x].author}`;

  const imgTags = liTags.appendChild(document.createElement("img"));
  imgTags.setAttribute("src", `${books[x].bookCoverImage}`);

  if (books[x].alreadyRead == true) {
    // pTags.style.color = "green";
    liTags.style.backgroundColor = "green";
  } else { 
        liTags.style.backgroundColor = "red";

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