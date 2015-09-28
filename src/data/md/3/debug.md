## Using GDB

### Instructions

For more information, [watch the short](https://youtu.be/-G_klBQLgdc).

### Example: factorial(n)

Let's work through an example. I have a function, `factorial(n)`, which returns `n!`.

```c
// returns the factorial of a given number
int factorial(int n) {
	if (n < 2) {
		// base case -- return 1
		return 1;
	} else {
		// recursive case -- return n * (n-1)!
		int res = factorial(n-1);
		return n * res;
	}
}
```

[Download full example here.](/data/problems/3/factorial.c)

This is an example of [recursion](https://study.cs50.net/recursion): the `factorial(n)` function invokes itself. 

### Let's try an example: roundDown(x)

`int roundDown(int x)` is supposed to return the nearest power of two less than or equal to `x`. But it doesn't... Try to fix it!

For the curious, [here's the corrected version](/data/problems/3/corrected.c).