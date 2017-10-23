<!--
*
* File Name: calculator.php
* Date: Oct 21 2017
* @author: Karrine McFarlane
* @version 1.0
*  --> 

<?php
// Let me learn from my mistakes
//ini_set('display_errors',1);
// Let me learn from my mistakes!
//error_reporting (E_ALL & ~E_NOTICE | E_STRICT);

//DEFINE VARIABLES - Strip html - Trim white space
//Intergers
$first = strip_tags(trim($_REQUEST["first"]));
$second = strip_tags(trim($_REQUEST["second"]));


//Create Heading
echo "<strong>Your Calculation Results</strong><br><hr>";

//Terminate if input is text

if (!is_numeric($first)) {  
    echo "Your first value is not a number. Please return to form.<br>"; 
    exit;}   
if (!is_numeric ($second))  {  
    echo "Your second value is not a number. Please return to form.<br>" ;  
    exit;
} 

// Convert input from string to an interger
$first = intval($first);
$second = intval($second);

// Create the range array
$range = range($first,$second);

//Determine which Calculation to make using a SWITCH
 
//RadioButton Selections
$operation =$_REQUEST["calculation"];
$total = 0;
$product = 0;

// Switch
switch( $operation ) {
    
    case 'first';
    //SUM of RANGE
    for($index = 0; $index < count($range); $index++) {
        $total += $range[$index];
      }
      echo "The range sum total is: $total ";
    break;

   //PRODUCT of RANGE
    case 'second';
    for($index = 0; $index < count($range); $index++) {
        $total *= $range[$index];
      }
      echo "The range product total is: $product ";
    break;

    default; 
    echo "something";
    break;
    
    }
    ?>