const urlEncode = function(text) {
  // Put your solution here
let encoded = "";

  for ( let i = 0; i < text.length; i++){
    let trimText = text.trim();
    if (trimText.charAt(i)=== " "){
      encoded+= "%20";      
    } else {
      encoded+= trimText.charAt(i);
    }
  } return encoded;

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));