function readingList(books) {
  let divBox = document.querySelector("#content");
  let ul = document.createElement("ul");
  
  
  divBox.appendChild(ul)
  for(let i=0; i<books.length; i++){
    
    
    let li = `<li id="list${i}">
            <p id="title${i}"></p>
            <img id="image${i}" src="${books[i].bookCoverImage}">
              </li>`
    ul.insertAdjacentHTML("beforeend",li);
    let textOfp = `${books[i].title} by ${books[i].author}`;
    document.getElementById(`title${i}`).innerHTML = textOfp;
    if(books[i].alreadyRead){
      document.getElementById(`list${i}`).style.backgroundColor = "green"
    }else{
      document.getElementById(`list${i}`).style.backgroundColor = "red"
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