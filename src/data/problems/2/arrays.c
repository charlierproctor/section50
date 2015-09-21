#include <stdio.h>
#include <cs50.h>

int main(void)
{
	// Create an array with the names of three people from section. 
	string classmates[] = { "David Malan", "Brian Scassellati", "Jason Hirschorn" };
	
	// Loop over those names, printing them out to the command line. 
	// Make sure to add a \n after each!
	for (int i = 0; i < 3; i++) {
		printf("Name: %s\n", classmates[i]);
	}

}