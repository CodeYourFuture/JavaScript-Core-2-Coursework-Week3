function readingList(books) {
  let mainDiv = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  mainDiv.append(ulElement);
    for (let i = 0; i <= books.length; i++) {
    
      let liElement = document.createElement("li");
      
      let pElement = document.createElement("p");
      pElement.textContent = `${books[i].title} by ${books[i].author}`;
      liElement.append(pElement);
      
      if (books[i].alreadyRead) {
        liElement.classList.add("green");
        // liElement.style.backgroundColor = "green";
      } else {
        liElement.classList.add("red");
        // liElement.style.backgroundColor = "red";
      };

      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", books[i].bookCoverImage);
      liElement.append(imgElement);
      
      
      let ulElement = document.querySelector("#reading-list");
      ulElement.appendChild(liElement);
    }
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
