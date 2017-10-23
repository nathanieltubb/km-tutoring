<?php

// First check that you have recieved values from all the form fields
if(!isset($_REQUEST['first_number'])) {
  echo "First Number is Missing; Please Enter A Valid Number!";
  exit;
}
if(!isset($_REQUEST['second_number'])) {
  echo "Second Number is Missing; Please Enter A Valid Number!";
  exit;
}
if(!isset($_REQUEST['operation'])) {
  echo "Operation is Missing; Please Select An Operation!";
  exit;
}

// Collect and sanatize operation numbers and convert to numeric
$first_number = strip_tags(trim($_REQUEST['first_number'])) + 0;
$second_number = strip_tags(trim($_REQUEST['second_number'])) + 0;

// Validate that both numbers are integers
if(!is_int($first_number)) {
  echo "First number is not an integer!";
  exit;
}
if(!is_int($second_number)) {
  echo "Second number is not an integer!";
  exit;
}

// Collect and sanatize operation string
$operation = strip_tags(trim($_REQUEST['operation']));

// Create the range array using the numbers
$range = range($first_number, $second_number);

switch ($operation) {
  case 'sum':

    // Define a variable to hold the total for the calculated value
    $total = 0;

    // Loop through the range array of values and perform calculation
    for($index = 0; $index < count($range); $index++) {
      $total += $range[$index];
    }

    echo "The sum is: " . $total;

    break;

  case 'product':

    // Define a variable to hold the total for the calculated value
    $product = 0;

    // Loop through the range array of values and perform calculation
    for($index = 0; $index < count($range); $index++) {
      $product *= $range[$index];
    }

    echo "The product is: " . $product;

    break;

  default:
    echo "Invalid operation!";
    exit;
    break;
}

