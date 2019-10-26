let numberOfVowels = function (sentence) {
  let output = "";
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
      output ++
    }
  }
    return output;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));