function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }
  
  function isArray(myArray) {
      return myArray.constructor.toString().indexOf("Array") > -1;
  }
  
  function isDate(myDate) {
      return myDate.constructor.toString().indexOf("Date") > -1;
  }
  
  
  let str = "Hi";
  console.log((typeof str ) === "string");       // true
  
  let myBool = false;
  console.log((typeof myBool ) === "boolean");   // true
  
  let number = 12.345;
  console.log((typeof number ) === "number");    // true


  // write function to return a random inte4ger number from a range
  // between low and high
  function randomIntFromRange(low, high)
  {
      var range = high - low;
      var randomRange = Math.random() * (range + 1);
      var intRandom = Math.floor(randomRange);

      return low + intRandom;
  }

  console.log(randomIntFromRange(10, 25));





















