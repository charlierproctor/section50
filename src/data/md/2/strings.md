## Strings

Although we can use the `string` declaration to declare strings, `strings` are really just arrays of characters.

- `string` and `char[]` are exactly equivalent!
	- Where could I go to see this?
- If I declare a `string s = "Section50"`, I can access the letters:

	```c 
	s[0] = 'S';
	s[1] = 'e';
	s[9] = '\0';
	```

- If I attempt to access the letter one past the end, I'll get the null terminating character, `\0`.

### Let's try it!

1. Create a `string` of your team's name. 
2. Print it out, letter by letter.
	
	```bash
	charlie@ide50:~/workspace $ ./letters
	T
	e
	a
	m
	5
	0
	```