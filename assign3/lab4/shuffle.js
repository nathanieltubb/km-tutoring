var numbers = [1, 2, 3, 4, 5, 6];

function shuffleArray(values) {
  // create a copy
  var copies = values.slice(0);
  for (var index = 0; index < copies.length; index++) {
    var randIndex = Math.floor(Math.random() * copies.length);
    var tmpValue = copies[index];
    copies[index] = copies[randIndex];
    copies[randIndex] = tmpValue;
  }
  return copies;
}

console.log(numbers);
console.log(shuffleArray(numbers));
console.log(numbers);