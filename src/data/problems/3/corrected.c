#include <stdio.h>
#include <cs50.h>

int roundDown(int x);

int main(void) {
	
    // grab a positive integer from the user.
	printf("Enter a positive value for x: ");
	int x = GetInt();

    // call roundDown and print the result.
	printf("roundDown(x) = %d\n", roundDown(x));
}

// round to the nearest power of two less than or equal to x
int roundDown(int x) {
    int smaller = 1;
	while (smaller <= x >> 1) {
		smaller = smaller << 1;
	}

	return smaller;
}