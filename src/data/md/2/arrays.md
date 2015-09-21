## Arrays

To make an array, we do:

```c
<data type> <name>[<size>];
int score[5];
```

To put values in the array:

```c
score[0] = 0; // zero index all arrays!
score[1] = 1;
score[2] = 2;
```

Or, we can initialize as such:

```c
int score[] = {1, 2, 3}; // size based on the number of entries
```

### Let's try it!

1. Create an array with the names of **three** people from section. 
2. Loop over those names, printing them out to the command line. Make sure to add a `\n` after each!	

	```bash
	charlie@ide50:~/workspace $ ./arrays
	David Malan
	Brian Scassellati
	Jason Hirschorn
	```