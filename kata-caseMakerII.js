const caseMaker = function(input, style) {
    let casedString;
if(typeof style === 'string')  {style = [style];} 
for(let i = 0; i < style.length;i++){
    switch(style[i]) {
        case "camel": 
            casedString = camelMaker(input);
            break;
        case "pascal":
            casedString = pascalMaker(input);
            break;
        case "snake" :
            casedString = snakeMaker(input);
            break;
        case "kebab":
            casedString = kebabMaker(input);
            break;
        case "title":
            casedString = titleMaker(input);
            break;
        default : 
            casedString = input;
        break;
    }  
}
    for(let i = 0; i < style.length;i++) {
        switch(style[i]) {
            case "vowel":
                casedString = vowelMaker(casedString);
                break;
            case "consonant":
                casedString = consMaker(casedString);
                break;
        }
    }
    for(let i = 0; i < style.length;i++) {
        switch(style[i]) {
            case "upper":
                casedString = upperMaker(casedString);
                break;
            case "lower":
                casedString = lowerMaker(casedString);
                break;
        }
    }
function camelMaker (input) {
    let answerString = "";
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
    let answerString = "";

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
    let answerString = "";
    for(let i = 0; i < input.length;i++) {
        answerString = input.split(" ").join("_");
    }
    return answerString;
}
function kebabMaker(input) {
    let answerString = "";
    for(let i = 0; i < input.length;i++) {
        answerString = input.split(" ").join("-");
    }
    return answerString;
}
function titleMaker(input) {
    let answerString = "";
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
    let answerString = "";
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
        let answerString = "";
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
    let answerString = "";
    answerString += input.toUpperCase();
    return answerString;
}
function lowerMaker(input) {
    let answerString = "";
    answerString += input.toLowerCase();
    return answerString;
}
return casedString;
}
console.log(caseMaker("this is a string", "camel"));
console.log(caseMaker("this is a string", "pascal"));
console.log(caseMaker("this is a string", "snake"));
console.log(caseMaker("this is a string", "kebab"));
console.log(caseMaker("this is a string", "title"));
console.log(caseMaker("this is a string", "vowel"));
console.log(caseMaker("this is a string", "consonant"));
console.log(caseMaker("this is a string", ["upper", "snake"]));