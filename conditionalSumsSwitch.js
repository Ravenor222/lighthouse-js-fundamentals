const conditionalSum = function(values, condition) {
let answerNumber;
  switch(condition) {
      case "even" :
          answerNumber = evenMaker(values);
          break;
        case "odd" :
            answerNumber = oddMaker(values);

  }
return answerNumber;
}; //function ends
function evenMaker(input) {
    let madeNumber=0;
        for(let i = 0; i < input.length;i++) {
            if (input[i] % 2 === 0) {
                madeNumber += input[i];
            }
        }
    return madeNumber;
}
function oddMaker(input) {
let madeNumber= 0;
    for(let i = 0; i < input.length;i++) {
        if(input[i] % 2 !== 0) {
            madeNumber += input[i];
        }
    }
    return madeNumber;
}
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));