// Write your code here
// Write your code here
let slides = document.querySelector("#slides")
let images = ["./images/1img.jpg", "./images/2img.jpg", "./images/3img.jpg", "./images/4img.jpg"];
slides = images[0];
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");


function first() {
  for(i=0; i<images.length; i--){
    slides.src = images[i - 1];
  }
}

function second() {
  for(i=0; i<images.length; i++){
    slides.src = images[i + 1];
  }
}

btn1.onclick = function() {
  set1 = setInterval(first, 1500);
}

btn3.onclick = function() {
  set2 = setInterval(second, 1500);
}

btn2.onclick = function(){
  clearInterval(set2);
  clearInterval(set1);
}