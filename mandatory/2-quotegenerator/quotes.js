// DO NOT EDIT BELOW HERE

// A function which will return one item, at
// random, from the given array.
//
// Parameters
// ----------
// choices: an array of items to pick from.
//
// Returns
// -------
// One item of the given array.
//
// Examples of use
// ---------------
// pickFromArray([1,2,3,4])     //maybe returns 2
// pickFromArray(coloursArray)  //maybe returns "#F38630"
//
// You DO NOT need to understand how this function works.
function pickFromArray(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

// A list of quotes you can use in your app.
// Feel free to edit them, and to add your own favorites.
const quotes = [
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  ,
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  
  {
    quote:
      "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
    author: "Michael Jordan",
  },
  
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.",
    author: "Mark Twain",
  },
  
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  
  {
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  
  {
    quote:
      "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    author: "John Lennon",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote:
      "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
    author: "Helen Keller",
  },
  {
    quote: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
 
  {
    quote:
      "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown",
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
  
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: " Albert Einstein",
  },
  
  {    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    quote: "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou",
  },
  
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  
  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "–Audrey Hepburn",
  },
  
  {
    quote: "Stand amongst the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
    author: "Javik, Mass Effect 3",
  },
  {
    quote: "I used to be an adventurer like you until I took an arrow to the knee.",
    author: "The Elder Scrolls V: Skyrim",
  },
  {
    quote: "Even in dark times, we cannot relinquish the things that make us human.",
    author: "Khan, Metro 2033",
  },
  {
    quote: "You can’t break a man the way you break a dog or a horse. The harder you beat a man, the taller he stands.",
    author: "Far Cry 2",
  },
  {
    quote: "The world fears the inevitable plummet into the abyss. Watch for that moment and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly.",
    author: "Dragon Age: Origins",
  },
  {
    quote: "What is bravery, without a dash of recklessness?",
    author: "Dark Souls",
  },
  {
    quote: "A man chooses, a slave obeys",
    author: "Andrew Ryan, Bioshock",
  },
  {
    quote: "We work in the dark to serve the light Nothing is true. Everything is permitted.",
    author: "Assassin’s Creed",
  },
  {
    quote: "Don't be sorry, be better",
    author: "Kratos, God of War",
  },
  {
    quote: "Overconfidence is a slow and insidious killer.",
    author: "Darkest Dungeon",
  },
  {
    quote: "They asked me how well I understood theoretical physics. I said I had a theoretical degree in physics. They said welcome aboard.",
    author: "Fallout: New Vegas",
  },
  {
    quote: "My past is not a memory. It’s a force at my back. It pushes and steers. I may not always like where it leads me, but like any story, the past needs resolution. What’s past is prologue.",
    author: "Metroid: The Other M",
  },
  {
    quote: "If the laws of physics no longer apply in the future … God help you.",
    author: "Portal 2",
  },
  {
    quote: "A famous explorer once said that the extraordinary is in what we do, not who we are.",
    author: "Tomb Raider",
  },
  {
    quote: "The right man in the wrong place can make all the difference in the world",
    author: "G-Man, Half-Life 2",
  },
  {
    quote: "Everyone thinks they’re the hero of their own story.",
    author: "Handsome Jack, Tales from the Borderlands, Episode 5",
  },
  {
    quote: "Science isn’t about why – it’s about why not.",
    author: "Cave Johnson, Portal 2",
  },
  {
    quote: "What good is an intellect if you can't use it?",
    author: "Raiden, Metal Gear Rising: Revengeance",
  },
  {
    quote: "Technologies are invented to make our lives easier -- not our choices.",
    author: "Adam Jensen, Deus Ex: Human Revolution",
  },
  {
    quote: "Dream, not of what you are, but of what you want to be.",
    author: "Margulis, Warframe",
  },
  {
    quote: "Hatred and prejudice will never be eradicated. And the witch hunts will never be about witches. To have a scapegoat, that's the key.",
    author: "Geralt of Rivia, The Witcher 3: Wild Hunt",
  },
  {
    quote: "War is where the young and stupid are tricked by the old and bitter into killing each other.",
    author: "Niko Bellic, Grand Theft Auto IV",
  },
  {
    quote: "It’s a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.",
    author: "Emily Kaldwin, Dishonored 2",
  },
  {
    quote: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom.",
    author: "Captain Price, Call of Duty: Modern Warfare",
  },
  {
    quote: "After all we've been through. Everything that I've done. It can't be for nothing.",
    author: "Ellie, Last of Us",
  },
  {
    quote: "Closing your eyes forces you to look at the darkness inside.",
    author: "Max Payne, Max Payne 2: The Fall of Max Payne",
  },
  {
    quote: "We all make choices, but in the end our choices make us.",
    author: "Andrew Ryan, Bioshock",
  },
  {
    quote: "Right and wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us. Both sides blame one another. There's no good or bad side. Just two sides holding different views.",
    author: "Squall Leonhart, Final Fantasy VIII",
  },
  {
    quote: "Don’t ever stop. Always keep going, no matter what happens and is taken from you. Even when life is so unfair, don’t give up.",
    author: "Ezio, Assassin's Creed II"
  },
  {
    quote: "All men dream - but not equally. Those who dream by night, in the dusty recesses of their minds, wake in the day to find that it was vanity... But the dreamers of the day are dangerous men, for they may act their dream with open eyes, to make it possible. This I did.",
    author: "Nathan Drake, Uncharted 3"
  },
  {
    quote: "We don't get to choose how we start in this life. Real 'greatness' is what you do with the hand you're dealt.",
    author: "Victor Sullivan, Uncharted 3: Drake's Deception"
  },
  {
    quote: "Corporations have more power than the government.",
    author: "Adam Jensen, Deus Ex: Human Revolution"
  },
  {
    quote: "Only a mind free of impediments is capable of grasping the chaotic beauty of the world",
    author: "Altair, Assassin's Creed"
  },
];

function btn1(){
  let chooseQuote = pickFromArray(quotes);

  let quoteEl = document.querySelector(".quote");
  let authorEl = document.querySelector(".author");
  let nextBtn = document.querySelector(".btn");

  quoteEl.innerHTML = chooseQuote.quote;
  authorEl.innerHTML = chooseQuote.author;
  nextBtn.addEventListener('click', btn1);
}

btn1();