#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(int argc, char* argv[])
{

	// Take a string from the command-line.
	printf("Please give me a string: ");
	string input = GetString();
	
	// Print out the ASCII value of each character in the string, separated by a `\n`.
	for (int i = 0, n = strlen(input); i < n; i++) {
		printf("%i\n", (int) input[i]);
	}

}