function readingList(books) {
  let html= document.createElement("ul");
    
    for(let x of books){
      let className = x.alreadyRead ? 'green' : 'red';
      let bookElement= document.createElement("li");
      let paraElement= document.createElement("p");
      let imgElement= document.createElement("img");
      paraElement.innerText = `${x.title} by ${x.author}`;
      imgElement.src=`${x.bookCoverImage}`;
      bookElement.classList.add(className);
      bookElement.appendChild(paraElement);
      bookElement.appendChild(imgElement);
      html.appendChild(bookElement);
    
      // let html = '<ul>';
      // html += `<li class="${className}">
      //             <p> ${x.title} by ${x.author} </p>   
      //             <img src="${x.bookCoverImage}" /> 
      //           </li>`; 
    } 
  //  document.querySelector("#content").innerHTML = html + '</ul>';
  document.querySelector("#content").appendChild(html);
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