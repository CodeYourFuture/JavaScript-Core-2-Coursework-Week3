function readingList(books) {
  // Write your code here..
  
let content =document.querySelector("#content")

  for (let book of books){
const createul=document.createElement("ul")
const createli=document.createElement("li")
const createImg=document.createElement("img")
const createEl=document.createElement("p")
createEl.innerText=`${book.title} by ${book.author}`
 if (book.alreadyRead=== true){
  createul.style.backgroundColor="green"
 }else {
  createul.style.backgroundColor="red"
 }
 createImg.src=book.bookCoverImage ;   
 createImg.style.width="2rem";
 createImg.style.height="2rem"
createul.appendChild(createli)
createli.appendChild(createEl)
createli.appendChild(createImg)
 content.appendChild(createul)
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
