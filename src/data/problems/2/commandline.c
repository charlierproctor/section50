#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(int argc, char* argv[])
{
	// Take a string from the command-line.
	string input = argv[1];

	// Print out every other letter.
	for (int i = 0, n = strlen(input); i < n; i+=2) {
		printf("%c\n", input[i]);
	}
}