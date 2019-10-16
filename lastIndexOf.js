function lastIndexOf(array, number) {
  foundMatch = false;
  result = 0;
  for(let i = array.length -1; i >= 0 ; i--) {
    if (array[i] === number ){
      foundMatch = true;
      result = i;
      break;
    }
  }
  if(foundMatch === true) {
    return result;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);