const makeCase = function(input, style) {
let answerString = ""; 
  //camel
if(style === "camel"){
  for(let i = 0; i < input.length;i++){
    if(input[i]=== " "){
      answerString += input[i+1].toUpperCase();
      i++;
    } else {
      answerString += input[i];
    }
  }
}
  //Camel ends

  //pascal
if (style === "pascal") {
  for(let i = 0; i < input.length; i++) {
    if (i === 0){ 
      answerString += input[i].toUpperCase();
    } else if (input[i] === " ") {
      answerString += input[i+1].toUpperCase();
      i++;
    } else {
      answerString += input[i];
    }
  }
} //pascal ends

  //snake
if(style === "snake"){
  for(let i = 0; i < input.length; i++){
    answerString = input.split(" ").join("_");
  }
}
  //snake ends

  //kebab 
if(style === "kebab"){
  for(let i = 0; i < input.length;i++) {
    answerString = input.split(" ").join("-");
  }
}
  //kebab ends
  //title 
if(style === "title") {
  for(let i = 0; i < input.length; i++) {
    if(i === 0){
      answerString += input[i].toUpperCase();
    } else if (input[i-1] === " "){
      answerString += input[i].toUpperCase();
    } else {
      answerString += input[i];
    }
  }
}
  //title ends
  //vowel
if(style === "vowel") {
  for(let i = 0; i < input.length; i++) {
    if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
      answerString += input[i].toUpperCase();
    } else {
      answerString += input[i];
    }
  }
}
  //vowel ends
  //consonent 
if(style === "consonant") {
  for(let i = 0; i < input.length; i++) {
    if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
      answerString += input[i];
    } else {
      answerString += input[i].toUpperCase();
    }
  }
}
  //consonent ends
return answerString;

}
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
//console.log(makeCase("this is a string", ["upper", "snake"]));