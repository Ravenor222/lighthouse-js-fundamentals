
let talkingCalendar = function(date) {
    let newDate = date.split("/");
    let afterDay = "";
    let newDay = newDate[2].replace("0", "");
    let monthList = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < newDate[1]; i++){
      if (i === newDate[1]-1) {
        newDate[1] = monthList[i];
      }
    }
    
      if (newDate[2] === "01") {
        afterDay = "st";
      } else if (newDate[2] === "02") {
        afterDay = "nd";
      } else if (newDate[3] === "03") {
        afterDay = "rd";
      } else {
        afterDay = "th";
      }
    
  return newDate[1] + " " + newDay + afterDay+ ", " + newDate[0];
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));