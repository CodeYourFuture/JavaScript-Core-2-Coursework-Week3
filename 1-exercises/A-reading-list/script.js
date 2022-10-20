function readingList(books) {
  const content = document.querySelector("#content"); //Select div by id

  //loop to create each element of the list
  for (let key in books) {
    const paragraphList = document.createElement("p"); //create element paragraph
    paragraphList.innerHTML = `${books[key].title} by ${books[key].author} `; //.innerHTML -> sets or returns the HTML content

    const pictureList = document.createElement("img"); //create element img
    pictureList.setAttribute("src", books[key].bookCoverImage); //pass att to pictureList(The attribute name, valuer[Href])
    pictureList.style.width = "200px"; //Resize to width 200px

    const ulList = document.createElement("ul"); //Create unordered list (bulleted)
    const liList = document.createElement("li"); //Create list item

    liList.appendChild(paragraphList); //Append paragraph
    liList.appendChild(pictureList); //Append pictureList
    ulList.appendChild(liList);
    content.appendChild(ulList);

    //Check if it is "true" the "alreadyRead" property, if yes the background will be green otherwise the background will be red
    if (books[key].alreadyRead == true) {
      liList.style.backgroundColor = "green";
    } else {
      liList.style.backgroundColor = "red";
    }
  }
}

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
