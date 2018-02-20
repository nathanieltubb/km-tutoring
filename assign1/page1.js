// How to display my image array into html file

// Create array of pictures
// var pictures=[
//     "hobart.jpg",
//     "paper-background.png",
//     "toggle.png",
//     "elderflower-logo.png",
// ];

// Define array to measure length of picture array
var arrayLength = pictures.length;

// create random number based on floor and length of array
var myRandom = Math.floor(Math.random() *arrayLength);

//Create html variable string that allows me to CHNAGE the image file
var myTag = '<img src ="images/' + 'preview.jpg"' + 'width="100" height="100" >';

var firstPart = '<img src ="images/';
var lastPart = '" width="250" height="250" >';

//create variable to pull a random photo from array
var ranImageName = pictures[myRandom];

// Put the variables together to display into new variable
var imageTag = firstPart + ranImageName + lastPart;

//Test in console
console.log (imageTag);

//Display Image
document.write(imageTag);

// Replace the FIRST paragraph with a random image
document.getElementById('paragraph-1-1').innerHTML = imageTag;

// Pick a new image
myRandom = Math.floor(Math.random() *arrayLength);
ranImageName = pictures[myRandom];
imageTag = firstPart + ranImageName + lastPart;

// Replace the SECOND paragraph with a random image
document.getElementById('paragraph-1-2').innerHTML = imageTag;

// Pick a new image
myRandom = Math.floor(Math.random() *arrayLength);
ranImageName = pictures[myRandom];
imageTag = firstPart + ranImageName + lastPart;

// Replace the THIRD paragraph with a random image
document.getElementById('paragraph-1-3').innerHTML = imageTag;

// Pick a new image
myRandom = Math.floor(Math.random() *arrayLength);
ranImageName = pictures[myRandom];
imageTag = firstPart + ranImageName + lastPart;

// Replace the FOURTH paragraph with a random image
document.getElementById('paragraph-1-4').innerHTML = imageTag;