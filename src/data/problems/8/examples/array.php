<?php

$colors = array("red", "blue", "green");
$str = "";

// loop thru colors, concatenating "$color " onto $str.
foreach ($colors as $color) {
    $str .= $color . ' ';
}

// prints "red blue green "
echo $str;

?>