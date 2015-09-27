#include <stdio.h>
#include <cs50.h>

int factorial(int n);

int main(int argc, char **argv) {
    // grab a positive integer from the user.
	printf("Enter a positive value for n: ");
	int n = GetInt();

    // call roundDown and print the result.
	printf("factorial(n) = %d\n", factorial(n));
}

// returns the factorial of a given number
int factorial(int n) {
	if (n < 2) {
		// base case -- return 1
		return n;
	} else {
		// recursive case -- return n * (n-1)!
		int res = factorial(n-1);
		return n * res;
	}
}