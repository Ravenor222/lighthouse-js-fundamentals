const blocksAway = function(arr) {
  // Put your solution heres
    var output = {east: 0, north: 0};
    let direction = "";
    for (var i = 0; i < arr.length; i += 2) {
      //first direction -> determining the compass direction to continue in
      loop0: if(arr[0] === "right" && i === 0) {
        direction = "east";
        output.east += arr[i+1];
        break loop0;
        ;
      } else if (arr[0] === "left" && i === 0) {
        direction = "north";
        output.north += arr[i+1];
        break loop0;
        ;
      }
      //east
        else if(arr[i] === "left" && direction === "east") {
        output.north += arr[i+1];
        direction = "north";
        break loop0;
      } else if (arr[i] === "right" && direction === "east") {
        output.north -= arr[i+1];
        direction = "south";
        break loop0;
      }
      //north
        else if(arr[i] === "left" && direction === "north") {
        output.east -= arr[i+1];
        direction = "west";
        break loop0;
      } else if ( arr[i] === "right" && direction === "north") {
        output.east += arr[i+1];
        direction = "east";
        break loop0;

      }
      //west
        else if(arr[i] === "left" && direction === "west") {
        output.north -= arr[i+1];
        direction = "south";
        break loop0;

      } else if ( arr[i] === "right" && direction === "west") {
        output.north += arr[i+1]; 
        direction = "north";
        break loop0;

      }
      //south
        else if(arr[i] === "left" && direction === "south") {
        output.east += arr[i+1];
        direction = "east";
        break loop0;

      } else if ( arr[i] === "right" && direction === "south") {
        output.east -= arr[i+1];
        direction = "west";
        break loop0;

      }
    }
    return output;
  }
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));