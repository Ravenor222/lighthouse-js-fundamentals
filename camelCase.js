let camelCase = function(input) {
  // Your code here
  let data = "";
  for( let i = 0 ; i < input.length; i++) {
      if (input[i] === " ") {
        i++;
        data += input[i].toUpperCase();
       } else {
        data += input[i]; }
  }
return data
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
