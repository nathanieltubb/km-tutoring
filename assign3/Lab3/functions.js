// create a function "correctName" that displays properly capitalized name
// if "jOE" is input, the output will be "Joe"
function correctName(strName)
{
    // 1. Convert string to lower case  "jOE"  -> "joe"
    var allLower = strName.toLowerCase();
    // 2. Extract first character "joe" -> "j"
    var firstChar = allLower.charAt(0);
    // 3. Convert the first character to upper case "j" -> "J"
    firstChar = firstChar.toUpperCase();
    // 4. Extract all characters but first one "joe" -> "oe"
    var smallRest = allLower.substring(1, strName.length );
    // 5. Combine first uppper case character with the rest lower case "J" + "oe"
    var strResult = firstChar + smallRest;
    // 6. Return the result
    return strResult;
}

console.log(correctName("fRaNk"));
