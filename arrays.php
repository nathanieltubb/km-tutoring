<?php
$hello = "Hello World";
$array_empty = array();
$array_basic = array('string one', 'string two');
$array_mixed = array(100, 10.10, 'another string');



//---------------------------------------------------------
echo( '<br> Basic Array Contents <br>');

var_dump($array_mixed);

echo "<pre>";
print($hello);
echo "</pre>";
echo "<pre>";
print_r($array_mixed);
echo "</pre>";

echo( '<br> -------- <br>');

//---------------------------------------------------------

$cats = array('ginger cat', 'tabby', 'oreo');
foreach ($cats as $key => $value) {
    echo('row: '.$cat.'<br>'); 
}

foreach ($cats as $cat) {
    echo('row: '.$cat.'<br>');
}

echo($cats[0].'<br><br>');

// echo($cat);
//---------------------------------------------------------

$profile = array( 
    'first_name' => 'Nathaniel', 
    'last_name'  => 'Tubb', 
    'email'      => 'nathaniel@gmail.com'
    );
foreach ($profile as $key => $value) {
    echo($key.' : '.$value.'<br>'); 
}

foreach ($profile as $value) {
    echo($value.'<br>');
}

echo($profile['first_name']);

$profile['first_name'] = 'Joe';

echo($profile['first_name']);

//---------------------------------------------------------

// for ($i=0; $i < ; $i++) { 
//     # code...
// }

// while ($a <= 10) {
//     # code...
// }

/* long comment */
// var_dump($array_basic);

// echo( '<br> --------');

// var_dump($array_mixed);

// echo( '<br> --------');

// echo( 'hello'.' '.'world');
// hello world