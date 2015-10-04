#include <stdio.h>
#include <cs50.h>

int main(void) {
	// prompt the user for a string; print a greeting.
    string str = GetString();
    printf("Hi %s!\n",str);
}
