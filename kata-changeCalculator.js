let calculateChange = function(total, cash) {
    // Your code here
    let returnedChange = cash - total;
    let change = {};
    if (returnedChange > 2000) {
        change.twenty = Math.floor(returnedChange/2000);
        returnedChange -= Math.floor(returnedChange / 2000) * 2000;
    }
    if (returnedChange > 1000) {
        change.ten = Math.floor(returnedChange / 1000);
        returnedChange -= Math.floor(returnedChange / 1000) * 1000;
    }
    if (returnedChange > 500) {
        change.five = Math.floor(returnedChange / 500);
        returnedChange -= Math.floor(returnedChange / 500) * 500;
    }
    if (returnedChange > 200) {
        change.toonie = Math.floor(returnedChange / 200);
        returnedChange -= Math.floor(returnedChange / 200) * 200;
    }
    if (returnedChange > 100) {
        change.loonie = Math.floor(returnedChange / 100);
        returnedChange -= Math.floor(returnedChange /100) * 100;
    }
    if (returnedChange > 25) {
        change.quarter = Math.floor(returnedChange / 25);
        returnedChange -= Math.floor(returnedChange / 25) * 25;
    }
    if (returnedChange > 10) {
        change.dime = Math.floor(returnedChange / 10);
        returnedChange -= Math.floor(returnedChange / 10) * 10;
    }
    if (returnedChange > 5) {
        change.nickel = Math.floor(returnedChange / 5);
        returnedChange -= Math.floor(returnedChange / 5 ) * 5;
    }
    if (returnedChange > 1) {
        change.penny = Math.floor(returnedChange / 1);
        returnedChange -= Math.floor(returnedChange / 1) * 1;
    }

    return change;
    
  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));