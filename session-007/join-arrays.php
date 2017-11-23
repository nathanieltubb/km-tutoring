<?php

// strlen(string)

// substr(string)

// array_combine(keys, values)

// array_merge(array1)

// function_exists(function_name)

// function number_of_characters(string $string, string $character) {
//   return count_chars(string)
// }

$months = array(
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
);

$animals = array(
  'zebu',
  'alpaca',
  'reindeer',
  'ibex',
  'toad',
  'parakeet',
  'snake',
  'hare',
  'wombat',
  'steer',
  'rhinoceros',
  'panda'
);

function joinArrays( array $key_array, array $value_array ) {
  return array_combine($key_array, $value_array);
}

$joined_array = joinArrays( $months, $animals );

echo '<pre>';
print_r($joined_array);
var_dump($joined_array);
echo '</pre>';







function isStringOfCorrectLength(string $string, int $minLength, int $maxLength) {
  var_dump($string);
  // Check if the function has been passed an actual string
  if( ! is_string($string)) {
    return false;
  }
  // Get the length of the string
  $string_length = strlen($string);
  // Test if the string length is within the min and max range
  if($string_length > $minLength && $string_length < $maxLength) {

    return true;

  } else {

    return false;

  }
}

if(isStringOfCorrectLength("Hello", 2, 10)) {
  echo 'The string "Hello" is within the range.';
} else {
  echo 'The string "Hello" is <em>not</em> within the range.';
}

if(isStringOfCorrectLength("Hello", 20, 100)) {
  echo 'The string "Hello" is within the range.';
} else {
  echo 'The string "Hello" is <em>not</em> within the range.';
}

if(isStringOfCorrectLength(456, 2, 10)) {
  echo 'The string "Hello" is within the range.';
} else {
  echo 'The string "Hello" is <em>not</em> within the range.';
}

var_dump(strlen(333));







function howManyOfTheseChars($string, $char) {
  $count = substr_count($string, $char);
  return $count;
}
