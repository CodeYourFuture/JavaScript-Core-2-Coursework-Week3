function readingList(books) {
  // Write your code here...
  let divContent = document.getElementById('content')
  let ul = document.createElement('ul')
  divContent.appendChild(ul)
  for(let x of books){
    let list = document.createElement('li')
    ul.appendChild(list)
    let paragraph = document.createElement('p')
    paragraph.style.color = 'white'
    paragraph.innerText = `Title: ${x.title}. Aurthor: ${x.author}`
    let imgEl = document.createElement('img')
    imgEl.src = x.bookCoverImage
    imgEl.style.width = '300px'
    imgEl.style.height = 'auto'
    list.appendChild(paragraph)
    list.appendChild(imgEl)
    if(x.alreadyRead){
      list.style.backgroundColor = 'green'
    } else {
      list.style.backgroundColor = 'red'
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