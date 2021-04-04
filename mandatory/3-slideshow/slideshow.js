// Write your code here
var images=[
    "https://images.unsplash.com/photo-1534939268078-694e7b6d99b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1507812335255-961c6cb5d7cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=753&q=80",
    "https://images.unsplash.com/photo-1464198016405-33fd4527b89d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=692&q=80",

]
//access the DOM
let accessingImage = document.getElementById('mainImage');
let accessingForwardButton = document.querySelector('#forwardButton');
let accessBackwardButton= document.querySelector('#backwardButton');
let accessAutoForwardButton = document.querySelector('#auto-forwardButton');
let accessAutoBackwardButton = document.querySelector('#auto-backButton');
let accessTheStopButton = document.querySelector('#stopButton');

// set the image Counter to 0 (where it should start to slide)
let imgCounter = 0;
//accessingImage.src = images[imgCounter];
let interval=4000; // the interval it must take for the slide to move automatically to another

function forwardButton() {
   if(imgCounter === images.length-1){
    imgCounter = 0;
    accessingImage.src=images[imgCounter]
   }
   else{
    imgCounter++;
    accessingImage.src=images[imgCounter]
 
   }
    
}

function backwardButton() {
    if(imgCounter <= 0){
        imgCounter = images.length-1;
        accessingImage.src=images[imgCounter.length-1]
        
       }
       else{
        imgCounter--;
        accessingImage.src=images[imgCounter]
       }
}
//Manipulate the DOM
accessingForwardButton.addEventListener('click', forwardButton);
accessBackwardButton.addEventListener('click',backwardButton);

accessAutoForwardButton.addEventListener('click', function(){
    setInterval(() => {
        forwardButton();
     
    
    }, interval);
})
accessBackwardButton.addEventListener('click', function(){
    setInterval(() => {
        backwardButton();
    
    }, interval);
})
accessTheStopButton.addEventListener('click', () => {
    clearInterval(autoBackward)
    clearInterval(accessBackwardButton)
})