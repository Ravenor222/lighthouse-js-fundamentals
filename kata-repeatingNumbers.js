let repeatNumbers = function(data) {
    // Put your solution here
    let numbers = "";
    for (let l = 0; l < data.length; l++) {
      for (let i = 0; i < data[l][1]; i++){
        numbers += data[l][0];
        
      }   if (l < data.length-1) {
          numbers += ", "; 
        }
   
     }  return numbers;
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));