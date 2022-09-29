function readingList(books) {
  let output = "";
  let container = document.querySelector('#content');
  let bookBackground = document.createElement('li');

  // books.map((books) => {
  //   if (books.alreadyRead === true) {
  //     bookBackground.style.backgroundColor = "green";
  //   } else {
  //     bookBackground.style.backgroundColor = "red";
  //   }
  // })
  
  // books.forEach((alreadyRead) => {
  //   if (Object.value(alreadyRead) === true) {
  //         bookBackground.style.backgroundColor = "green";
  //       } else {
  //         bookBackground.style.backgroundColor = "red";
  //      }
  // });


  for(let value of books){
    console.log(value);

    output += `
    <div id = content>
    <ul><li id = 'content--color'>${Object.key === true ? bookBackground.style.backgroundColor = "green" : bookBackground.style.backgroundColor = "red"}
    <p id = 'content--title' >${value.title} by ${value.author}</p>
    <img id = 'content--avatar' width = 200rem height = 280rem src = ${value.bookCoverImage}  >
    </li></ul>
    </div>
    `
   }
  container.innerHTML = output;
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

readingList(books);