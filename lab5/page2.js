
// show how much time is left to READING WEEK
var second = 1000; // 1000 milliseconds in a second
var minute = 60 * second;
var hour = 60 * minute;
var day = 24 * hour;

var startDateReadingWeek = new Date(2018, 1, 9, 17, 0, 0, 0);
var timeNow = new Date();

var timeLeft = startDateReadingWeek - timeNow;  // MILLISeconds
//console.log(timeNow);

console.log(timeLeft);
var daysLeft = Math.floor(timeLeft / day);
console.log("Days Left: " + daysLeft);

var timeLeftRemainder = timeLeft % day;
console.log(timeLeftRemainder);

var hoursLeft = Math.floor(timeLeftRemainder / hour);
console.log("Hours Left: " + hoursLeft);

timeLeftRemainder = timeLeftRemainder % hour;
console.log(timeLeftRemainder);

var minutesLeft = Math.floor(timeLeftRemainder / minute);
console.log("Minutes Left: " + minutesLeft);



// // how do you assure that two random items are distinct

// var names = ["Jim", "Joe", "Alice", "Tina"];
// names = ["Jim"];

// var randName1 = names[Math.floor(Math.random() * names.length)];
// var randName2 = names[Math.floor(Math.random() * names.length)];

// while (randName1 == randName2) {
//     randName2 = names[Math.floor(Math.random() * names.length)];
// }

// console.log(randName1);
// console.log(randName2);