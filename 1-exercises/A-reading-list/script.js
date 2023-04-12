function readingList(books) {
   
  const ulElement = document.createElement("ul");
  ulElement.className = "list";
  // create the ul element
  // give it a class  

  books.forEach((element) => {
    // loop through the books array

    const liElement = document.createElement("li");
    liElement.className = "list-item-book";
    // create the li element

    const imgElement = document.createElement("img");
    imgElement.className = "list-item-book-image";
    imgElement.src = element.bookCoverImage;
    // create the img element

    const spanElementOne = document.createElement("span");
    spanElementOne.className = "list-item-book-title";
    spanElementOne.textContent = element.title;
    // create the first span element
    
    const spanElementTwo = document.createElement("span");
    spanElementTwo.textContent = "by";
    // create the second span element

    const spanElementThree = document.createElement("span");
    spanElementThree.className = "list-item-book-author";
    spanElementThree.textContent = element.author;
    // create the third span element
 
    const pElement = document.createElement("p");
    pElement.className = "list-item-book-text";
    // create the p element (which will contain all three spans)

    pElement.appendChild(spanElementOne);
    pElement.appendChild(spanElementTwo);
    pElement.appendChild(spanElementThree);
    // append the three spans to the p element

    if (element.easterEgg) {
      // if the item has an easterEgg property:
      const easterEgg = document.createElement("a");
      easterEgg.className = "easter-egg"
      easterEgg.textContent = "Talk at Google"
      easterEgg.href = element.easterEgg;
      easterEgg.target = "_blank";
      pElement.appendChild(easterEgg);
    }

    liElement.appendChild(imgElement);
    liElement.appendChild(pElement);
    // append the img element and the p element to the li element

    if (element.alreadyRead === true) {
      liElement.classList.add("list-item-book-read");
    } else if (element.alreadyRead === false) {
      liElement.classList.add("list-item-book-unread");
    }
    // check the alreadyRead boolean, and apply a class based its on its value

    ulElement.append(liElement);
    // append the li element to the ul element

  });

  content.appendChild(ulElement);
  // append the ul element to the div element "content"
}

const content = document.getElementById("content");
// define the div element with the id "content"

const h1Element = document.createElement("h1");
h1Element.textContent = "📖 Reading List"
content.appendChild(h1Element)
// create the h1 element
// give it a textContent
// append the h1 element to the div element "content"

const books = [
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt & David Thomas',
    alreadyRead: false,
    bookCoverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1401432508l/4099.jpg',
  },
  {
    title: 'The Four Noble Truths',
    author: 'Ajahn Sumedho',
    alreadyRead: true,
    bookCoverImage:
      'https://cdn.amaravati.org/wp-content/uploads/2014/09/19/The-Four-Noble-Truth-Cover-670x1024.jpg',
  },
  {
    title: 'When Things Fall Apart',
    author: 'Pema Chödrön',
    alreadyRead: true,
    bookCoverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320553046l/687278.jpg',
  },
  {
    title: 'How to Change Your Mind: The New Science of Psychedelics ',
    author: 'Michael Pollan',
    alreadyRead: false,
    bookCoverImage: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554267982l/44774807._SY475_.jpg',
    easterEgg: 'https://www.youtube.com/watch?v=KuhmZSFvhL0',
  }
];

readingList(books);
