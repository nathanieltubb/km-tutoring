var names = ["Jim", "Joe", "Joseph", "Alice", "Anna", "Abigale"];
var howMany = 10;
var lowAgeLimit = 22;
var highAgeLimit = 52;

function createTable(arrNames, howMany, lowAge, highAge) {
  var myTable = "";
  myTable = '<table border="2">';
  var sumOfAges = 0;
  for (var row = 1; row <= howMany; row++) {
    var randName = Math.floor(Math.random() * arrNames.length);
    randName = arrNames[randName];
    var randAge = randomIntFromRange(lowAge, highAge);
    //myTable = myTable
    myTable += "<tr>";
    myTable += "<td>" + randName + "</td>";
    sumOfAges = sumOfAges + randAge;
    if (randAge > 50) {
      myTable += '<td bgcolor="#D3D3D3">' + randAge + "</td>";
    } else {
      myTable += "<td>" + randAge + "</td>";
    }
    myTable += "</tr>";
  }
  var averageAge = sumOfAges / howMany;
  myTable += "<tr><td>" + averageAge + "</td><td>" + sumOfAges + "</td></tr>";
  myTable += "</table>";
  return myTable;
}

document.write(createTable(names, howMany, lowAgeLimit, highAgeLimit));

function randomIntFromRange(low, high) {
  var range = high - low;
  var randomRange = Math.random() * (range + 1);
  var intRandom = Math.floor(randomRange);

  return low + intRandom;
}



