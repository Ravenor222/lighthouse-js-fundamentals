  const numberGuesser = function(){
    let answerNumber = Math.ceil(Math.random()*100);

    // the prompt & variables
    let prompt = require("prompt-sync")();
    console.log("Guess a number: ")
    let number = prompt("> "  );
    let numberOfAttempts = 0;
    let previousGuess;

    //looping while loop for the prompt
  while (number !== answerNumber){

    //If its not a number
      if(isNaN(number)) {
        console.log("Thats not a number");
        console.log("Guess a number: ")
        number = prompt("> ")
      } 

    // If its the same as the previous guess
      else if (number == previousGuess) {
        console.log("You've already said that!")
        console.log("Guess a number: ");
        number = prompt("> ")
      } 
    // too low
      else if(number < answerNumber) {
        console.log("Too Low!")
        previousGuess = number;
        console.log("Guess a number: ")
        number = prompt("> ");
        numberOfAttempts++;
    }
    // too high
     else if (number > answerNumber) {
        console.log("Too High!")
        previousGuess = number;
        console.log("Guess a number: ")
        number = prompt(">  ")
        numberOfAttempts++;
    // success
    } else if (number == answerNumber){
      break;     
    
  }
  }
  return "You got it! You took " + numberOfAttempts + " attempts!";
  }
  
  console.log(numberGuesser());
  