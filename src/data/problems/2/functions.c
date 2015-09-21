#include <stdio.h>
#include <cs50.h>

// Create a function `printer` that prints whatever you pass to it. 
void printer(string str) {
	printf("%s",str);
}

int main(void)
{
	// grab a string from the command line.
	printf("Please give me a string: ");
	string s = GetString();

	// call the printer function
	printer(s);

}