const instructorWithLongestName = function(instructors) {
  let longest = "";
  let object;
  for (let i = 0; i < instructors.length; i++) {
    let nameLength = instructors[i].name;
    if (nameLength.length > longest.length){
      longest = nameLength;
      object = instructors[i];
    } 
  } return object;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));