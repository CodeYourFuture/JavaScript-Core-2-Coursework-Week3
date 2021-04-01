console.log("Testing JS file loaded!")

// Task 1

// Without changing any of the HTML or CSS, update the <section> tags so that they have white backgrounds.


const sections = document.querySelectorAll("section")

sections.forEach((section) => {
    section.style.backgroundColor = "white"
});


// Task 2

// Without changing any of the HTML or CSS, update the images on the page so that they are all centered.

// const imgs = document.querySelectorAll("img")

// for (let image of imgs) {
//     image.style.display = "block";
//     image.style.margin = "0 auto"
// }

const imgs = document.querySelectorAll("img");
for (let image of imgs) {
  image.style.display = "block";
  image.style.margin = "0 auto";
}
// Hint: look at the CSS to see if there are any classes already written which you can use.


// Task 3

// Google the date of birth and death of each of the people on the page. Without changing any of the HTML or CSS, add this in a paragraph to the end of their <section>.

let personDates = {
    "Grace Hopper": "9th December 1906 - 1st January 1992",
    "Katherine Johnson": "26th August 1918 - 24th February 2020",
    "Ada Lovelace": "10th December 1815 - 27th November 1852"
};

for (let section of sections) {
    const name = section.querySelector("h1").innerText;
    const dates = document.createElement("p");
    dates.innerText = personDates[name];
    dates.style.fontWeight = "bold";
    section.append(dates);
}