// Write your code here

let imageArr = [
  {
      src: 'Images/Image-1.png',
      alt: " Kurome Minimalistic"
  },
 
  {
      src: 'Images/Image-2.png',
      alt: "Starter Pokemon from each Generation"
  },
  
  {
      src: 'Images/Image-3.jpg',
      alt: "See-Through Pokeball"
  },
  
  {
      src: 'Images/Image-4.jpg',
      alt: "Astronaut on Moon"
  },
  
  {
      src: 'Images/Image-5.jpg',
      alt: "Batman Minimalistic"
  },
  
  {
      src: 'Images/Image-6.png',
      alt: "Rin Okumura Minimalist"
  },
  
  {
      src: 'Images/Image-7.jpg',
      alt: "Dark Flash Minimalistic"
  },
  
  {
      src: 'Images/Image-8.png',
      alt: "Izuku Midoriya Suit"
  },
  
  {
      src: 'Images/Image-9.jpg',
      alt: "Chewie"
  },
  
  {
      src: 'Images/Image-10.png',
      alt: "Mob Psycho100"
  },
  
  {
      src: 'Images/Image-11.jpg',
      alt: "Happy Hamburger"
  },
  
  {
      src: 'Images/Image-12.png',
      alt: "Goku, Whis Gi, SSJS1 -> SSGSS"
  },
  
  {
      src: 'Images/Image-13.jpg',
      alt: "1Up"
  },
  
  {
      src: 'Images/Image-14.jpg',
      alt: "Legend Of Zelda Landscape"
  },
  
  {
      src: 'Images/Image-15.jpg',
      alt: "Iron Man Minimalistic"
  },
  
  {
      src: 'Images/Image-16.jpg',
      alt: "Pikachu"
  },
  
  {
      src: 'Images/Image-17.jpg',
      alt: "Pikachu Minimalistic"
  },
  
  {
      src: 'Images/Image-18.jpg',
      alt: "Spidey & Venom"
  },
  
  {
      src: 'Images/Image-19.jpg',
      alt: "Sub-Zero Minimalistic"
  },
];


let imgElem = document.querySelector("#incl-Images")

let autoPrevElem = document.querySelector('.btn1');
autoPrevElem.addEventListener("click", () => autoPrevBtnClick())

let prevElem = document.querySelector('.btn2');
prevElem.addEventListener("click", () => prevBtnClick())

let pauseElem = document.querySelector('.btn3');
pauseElem.addEventListener("click", () => pauseClick())

let nextElem = document.querySelector('.btn4');
nextElem.addEventListener("click", () => nextBtnClick())

let autoNextElem = document.querySelector('.btn5');
autoNextElem.addEventListener("click", () => autoNextBtnClick())

let imageIndex = 0;
const image = () =>{
    imgElem.src = imageArr[imageIndex].src;
}

const nextBtnClick = () => {
    imageIndex++;
    if(imageIndex === imageArr.length - 1) {
        imageIndex = 0;
    }
    image();
}

const prevBtnClick = () => {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = imageArr.length - 1
    }
    image();
};

let imgNum = 0;
const autoNextBtnClick = () => {
    imgNum = setInterval(nextBtnClick, 3000)
};

const autoPrevBtnClick = () => {
    imgNum = setInterval(prevBtnClick, 3000)
};

const pauseClick = () => {
    clearInterval(imgNum)
    
};

image();