const greekGods = [
    "Aphrodite",
    "Ares",
    "Artemis",
    "Athena",
    "Poseidon",
    "Zeus",
  ];
  
  for (x = 0; x < greekGods.length; x++){
    console.log(x + ". " + greekGods[x])
}

for (let x = 0; x < greekGods.length; x++){
    console.log(x + ". " + greekGods[x])
}

for (let x = 1; x < greekGods.length; x++){
    if(x == 1) {
        setTimeout(function() {
            console.log(greekGods[x])
        }, 2000)
    }
    else
    {
        console.log(x + ". " + greekGods[x])
    }
}


  // before running the code in your browser, discuss the expected order of each loop
  
  // synchronous - loop through the array of greek gods and print the index numbers and values to the console, e.g. '1. Ares'
  
  // asynchronous - same as before but the index and the value of the god at position 2 in array should be printed after 2 seconds. Use: setTimeout()

