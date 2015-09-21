## Command-Line Arguments

- command line arguments allow you to pass arguments into a program
- So now `int main(void)` becomes `int main(int argc, char* argv[])`
	- `argc` is the number of arguments passed to the program
	- `argv[]` is an array of strings, or `char *`'s that were passed to the program

	```bash
	charlie@ide50:~/workspace $ ./mario 8
	```

	- `argc = 2`
	- `argv = { "./mario", "8" }`

- You can treat these arguments as a multidimensional array, eg. `argv[0][2]` access the third character in the first word (`m`).

### Let's try it!

1. Take in a string **from the command line**.
2. Print out every other letter.
	
	```bash
	charlie@ide50:~/workspace $ ./commandline lololcats
	lllas
	charlie@ide50:~/workspace $ ./commandline banana
	bnn
	```