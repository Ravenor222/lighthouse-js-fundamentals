const organizeInstructors = function(instructors) {
    // Put your solution here
    let answerObject = {};
    for (let i = 0; i < instructors.length; i++) {
        let courses = instructors[i].course;
        if (courses in answerObject) {
            answerObject[courses].push(instructors[i].name);
        } else {
            answerObject[courses] = [instructors[i].name];
        }
    }
    return answerObject;
  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));