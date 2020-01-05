let numberOfVowels = function(data) {
    let vowelNumber = 0;
    for(let i = 0; i < data.length; i++) {
        switch(data[i]) {
            case "a":
                vowelNumber += 1;
                break;
            case "e":
                vowelNumber += 1;
                break;
            case "i":
                vowelNumber +=1;
                break;
            case "o":
                vowelNumber +=1;
                break;
            case "u":
                vowelNumber +=1;
                break;
        }
    }
    return vowelNumber;
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));