<?php
// $value = "abcd";
// var_dump(intval($value));

// $value = "10";
// var_dump(intval($value));
// $value = "10.3";
// var_dump(intval($value));

// $value = "abc ;;; 10.3";
// var_dump(intval($value));
// $value = "10.3"+0;
// var_dump($value);
// var_dump(intval($value));

// $value = ";laksdjf;l 13"+0;
// var_dump($value);
// var_dump(intval($value));

$value = ";laksdjf;l 13";
var_dump(is_numeric($value));
$value = "13.3";
var_dump(is_numeric($value));
$value = "12";
var_dump(is_numeric($value));
