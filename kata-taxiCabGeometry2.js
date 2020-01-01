const blocksAway = function(arr) {
  // Put your solution heres
    var output = {east: 0, north: 0};
    let direction = "";
    for (var i = 0; i < arr.length; i += 2) {
      //first direction -> determining the compass direction to continue in
        if ( arr[i] === "left") {
          if(i===0) {
            direction = "north";
            output.north += arr[i+1]}
          else if(direction === "north") {
            direction = "west";
            output.east -= arr[i+1]}
          else if(direction === "west") {
            direction = "south";
            output.north -= arr[i+1]}
          else if(direction === "south") {
            direction = "east";
            output.east += arr[i+1]}
          else if(direction === "east") {
            direction = "north";
            output.north += arr[i+1]}
        }
        if ( arr[i] === "right") {
          if(i===0){
            direction = "east";
            output.east += arr[i+1]}
          else if(direction === "north") {
            direction = "east";
            output.east += arr[i+1]}
          else if(direction === "west") {
            direction = "north";
            output.north += arr[i+1]}
          else if(direction === "south") {
            direction = "west";
            output.east -= arr[i+1]}
          else if(direction === "east") {
            direction = "south";
            output.north -= arr[i+1]}
        }
    }
    return output;
  }
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));