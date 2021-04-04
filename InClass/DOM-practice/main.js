console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.

let setSection=document.querySelectorAll('section');
//since it return a nodes list in a form of an array we can iterate through it
for(let key of setSection){
    key.style.backgroundColor='white';
}

// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// Hint: look at the CSS to see if there are any classes already written which you can use.

let imgEl=document.querySelectorAll('img');
for (let image in imgEl){
    imgEl[image].style.cssType='img';
}



// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.
let birthDate=[
    {
        name:"GRACE HOPPER",
        dateOfBirth:"December 9, 1906",
        dateOfDeath:"January 1, 1992"
    },
    {
        name:"KATHERINE JOHNSON",
        dateOfBirth:"August 26, 1918",
        dateOfDeath:"February 24, 2020"
    },
    {
        name:"ADA LOVELACE",
        dateOfBirth:"December 10, 1815",
        dateOfDeath:"November 27, 1852"
    }
]

setSection.forEach(day =>{
    let getHeading=day.querySelector('section');
    let createParagraph=day.createElement('p');
    createParagraph.innerHTML=`<strong>Born</strong> ${birthDate.dateOfBirth} <strong>Death</strong> ${birthDate.dateOfDeath}`;
    getHeading.appendChild(createParagraph);
})
