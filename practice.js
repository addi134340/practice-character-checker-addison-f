const readlineSync = require('readline-sync');

let favoritePhrase = readlineSync.question("What is your favorite phrase? ");

let indexNumber = readlineSync.questionInt("Please give an index number: ");

let phraseIndex = favoritePhrase[indexNumber];

console.log("-----------------------");
console.log("The character at that index numebr is " + phraseIndex + "!");