const squareCode = function(message) {
    // Put your solution here
    let final = [];
    let rows = [];
    let noSpace = message.replace(/ /g , "").split("");
    let columns = Math.ceil(Math.sqrt(noSpace.length));

    for (let x = 0; x < noSpace.length; x++) {
        rows.push(noSpace[x]);
        if ((x + 1) % columns === 0 && (x + 1) !== noSpace.length) {
            rows.push(" ");
        }
    }
rows = rows.join("");
    for( let j = 0; j < columns; j++){
        final += rows[j];
       for (let i = 0; i < rows.length; i++) {
           if (rows[ i - j - 1]=== " ") {
               final += rows[i];
           }
       }
       final += " ";
    }

    return final;
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
