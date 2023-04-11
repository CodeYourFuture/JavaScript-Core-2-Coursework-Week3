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


const contentDiv = document.querySelector("#content");
const ul = document.createElement("ul")
contentDiv.appendChild(ul)

for (let oneOfBooks of books){   
    const paragraf = document.createElement("p");
    const image = document.createElement("img");
    const listItem = document.createElement("li");
    
    paragraf.textContent = oneOfBooks.title + oneOfBooks.author;
    image.src = oneOfBooks.bookCoverImage;

    listItem.appendChild(paragraf);
    listItem.appendChild(image)

    //styling starts here
    paragraf.style.color = "white";
    image.style.width = "200px";

    if (oneOfBooks.alreadyRead === true) {
      listItem.style.backgroundColor = "green"
    }
    else if (oneOfBooks.alreadyRead === false) {
      listItem.style.backgroundColor = "red"
    }
    //styling ends here
    ul.appendChild(listItem)
};





// for the tests, do not modify this array of books

