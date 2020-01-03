const caseMaker = function(input, style) {
    
    let answerString= ""; 
if(typeof style === 'string')  {style = [style];} 
for(let i = 0; i < style.length;i++){
    switch(style[i]) {
        case "camel": 
            answerString = camelMaker(input);
            break;
        case "pascal":
            answerString = pascalMaker(input);
            break;
        case "snake" :
            answerString = snakeMaker(input);
            break;
        case "kebab":
            answerString = kebabMaker(input);
            break;
        case "title":
            answerString = titleMaker(input);
            break;
        case "vowel":
            answerString = vowelMaker(input);
            break;
        case "consonant":
            answerString = consMaker(input);
            break;
        case "upper":
            answerString = upperMaker(input);
            break;
        default : 
            console.log("ain't got it");
            break;
    }  
}
    

function camelMaker (input) {
    for(let i = 0; i < input.length; i++) {
        if(input[i]=== " "){
            answerString += input[i+1].toUpperCase();
            i++;
          } else {
            answerString += input[i];
          }
    }
    return answerString;
}
function pascalMaker(input) {
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
      return answerString;
}
function snakeMaker(input) {
    for(let i = 0; i < input.length;i++) {
        answerString = input.split(" ").join("_");
    }
    return answerString;
}
function kebabMaker(input) {
    for(let i = 0; i < input.length;i++) {
        answerString = input.split(" ").join("-");
    }
    return answerString;
}
function titleMaker(input) {
    for(let i = 0; i < input.length;i++) {
        if(i === 0){
            answerString += input[i].toUpperCase();
          } else if (input[i-1] === " "){
            answerString += input[i].toUpperCase();
          } else {
            answerString += input[i];
          } 
    }
    return answerString;
}
function vowelMaker(input) {
    for(let i = 0; i < input.length; i++) {
        if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
          answerString += input[i].toUpperCase();
        } else {
          answerString += input[i];
        }
      }
    return answerString;
    }
    function consMaker(input) {
    for(let i = 0; i < input.length; i++) {
        if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
          answerString += input[i];
        } else {
          answerString += input[i].toUpperCase();
        }
      }
      return answerString;
}
function upperMaker(input) {
    answerString += input.toUpperCase();
    return answerString;
}
function lowerMaker(input) {
    answerString += input.toLowerCase();
    return answerString;
}
return answerString;
}


console.log(caseMaker("this is a string", "camel"));
console.log(caseMaker("this is a string", "pascal"));
console.log(caseMaker("this is a string", "snake"));
console.log(caseMaker("this is a string", "kebab"));
console.log(caseMaker("this is a string", "title"));
console.log(caseMaker("this is a string", "vowel"));
console.log(caseMaker("this is a string", "consonant"));
console.log(caseMaker("this is a string", ["upper", "snake"]));