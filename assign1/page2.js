// Get a random index
var wordsLength = words.length;

// Get a random index
var ranWordIndex = Math.floor(Math.random() * wordsLength);

// Split word and definition
var ranWordName = words[ranWordIndex];
var myDefinition = ranWordName.split(' | ', 2);
var myWord = myDefinition[0];
var myMeaning = myDefinition[1];

// Set up the HTML for the output
var firstPart = 'Word: <strong>';
var middlePart = '</strong> means <strong>';
var lastPart = '</strong>';

// Concatinate HTML and word strings
var myHTMLTag = firstPart + myWord + middlePart + myMeaning + lastPart;

// Replace FIRST paragraph contents
document.getElementById('paragraph-1-1').innerHTML = myHTMLTag;

// Get a random index
var ranWordIndex = Math.floor(Math.random() * wordsLength);

// Replace SECOND paragraph contents
var ranWordName = words[ranWordIndex];
var myDefinition = ranWordName.split(' | ', 2);
var myWord = myDefinition[0];
var myMeaning = myDefinition[1];

var myHTMLTag = firstPart + myWord + middlePart + myMeaning + lastPart;

document.getElementById('paragraph-1-2').innerHTML = myHTMLTag;

// Replace THIRD paragraph contents
var ranWordName = words[ranWordIndex];
var myDefinition = ranWordName.split(' | ', 2);
var myWord = myDefinition[0];
var myMeaning = myDefinition[1];

var myHTMLTag = firstPart + myWord + middlePart + myMeaning + lastPart;

document.getElementById('paragraph-1-3').innerHTML = myHTMLTag;

// Remove FORTH paragraph contents
document.getElementById('paragraph-1-4').remove();
