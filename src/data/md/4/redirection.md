## Redirection

At the command line, by using redirection commands like `>` or `|` you can control the input and output of your program.

- `>` - output; print the output of a program to a file instead of stdout 

	```bash
	charlie@ide50:~/workspace $ ./hello > output.txt
	```

	- `>>` - append to an output file instead of overwriting its data
	- `2>` - just like above, instead it will print out error messages to a file.
- `<` - input; use the contents of some file as input to a program 

	```bash
	charlie@ide50:~/workspace $ ./hello < input.txt
	```

- `|` - pipe; take the output of one program and use it as input in another.

	```bash
	charlie@ide50:~/workspace $ ./name Charlie | ./hello
	```

<a href="/data/problems/4/hello.c" target="_blank">Download hello.c example here.</a>

<a href="/data/problems/4/name.c" target="_blank">Download name.c example here.</a>