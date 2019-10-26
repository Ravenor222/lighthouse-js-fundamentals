function sumLargestNumbers(data) {
  data.sort((a,b) => b - a);
    let empty =[];
    for (let i = 0; i < data.length; i++) {
        empty.push(data[i]);

  }
  return empty[0] + empty[1];
} 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
