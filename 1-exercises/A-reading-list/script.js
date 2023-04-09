function readingList(books) {

const getDiv= document.querySelector('#content') // acessing the div using queryselector 
  for (let i = 0; i < books.length;i++){
    const pElement = document.createElement('p'); // creating p element
    const book = books[i] ;
    const title = book.title;
    const author = book.author;
    pElement.textContent = `${title} by ${author}`;
    getDiv.appendChild(pElement);
   
    
    const img = document.createElement('img');  // creating image element
    const cover = book.bookCoverImage;
    img.setAttribute('src', cover);
    getDiv.appendChild(img);

    const unorderedList = document.createElement('ul') // creating a list 
    const list = document.createElement('li')
    list.appendChild(pElement);
    list.appendChild(img)
    unorderedList.appendChild(list); 
    getDiv.appendChild(unorderedList);


    if (books[i].alreadyRead === false ){         // changing style 
       list.classList.add("not_read_it")
      

      } else {
       list.classList.add("read_it")
       

      } 
   

  }  
 
  
  // Write your code here...
}

// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
