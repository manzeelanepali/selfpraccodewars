// Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
// Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
// Have fun!

// pseudocode

// 1.
// 2. create a variable that takes  an array that has all  the days of a week  its elements

function dayOfTheWeek(date) {
  let newFormat = date.split("/");
  console.log(newFormat);
  const d = new Date(newFormat[2], newFormat[1] - 1, newFormat[0]);
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = day[d.getDay()];

  return dayName;
}

console.log(dayOfTheWeek("30/12/2017"));
