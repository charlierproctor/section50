<?php

// an associative array
$assoc = [ "c" => "compiled", "php" => "interpreted", "js" => "interpreted" ];

// loop through $assoc, printing out the $language and $type
foreach ($assoc as $language => $type) {
    echo "the language is: " . $language ."\tthe type is: " . $type;
}

?>