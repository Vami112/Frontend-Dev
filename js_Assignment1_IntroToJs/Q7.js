// Q7 Smart Guessing Game
let secret = Math.floor(Math.random()*50)+1;
let guess = 20;

if(guess===secret) console.log("Correct guess!");
else if(Math.abs(guess-secret)<=3) console.log("Very close!");
else if(guess>secret) console.log("Too high");
else console.log("Too low");