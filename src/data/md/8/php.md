## PHP

- `PHP`, or PHP Hypertext Preprocessor, is a server side scripting language that combines easily with `HTML`.
- here's `speller.c`'s `load()` function:

```php
<?php

function load($dictionary)
{
    global $size;
    global $table;

    foreach(file($dictionary) as $word)
    {
        $table[$word] = true;
    }
}
?>
```
- `PHP` comes wrapped:
	```php 
	<?php
	    echo "Hello, World!";
	?>
	```
- can stick any `PHP` into any `HTML` file.

### Passing Data

- `GET`: information passed in the URL.
- `POST`: information passed in the `HTTP` message body.