#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)
{
	// Create a `string` of your team's name. 
	string teamname = "Team Awesome";
	
	// Print it out, letter by letter.
	for (int i = 0, n = strlen(teamname); i < n; i++) {
		printf("%c\n", teamname[i]);
	}

}