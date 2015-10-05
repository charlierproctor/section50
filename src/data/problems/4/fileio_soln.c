#include <stdio.h>
#include <cs50.h>

int main(int argc, const char *argv[]){
	
	// I did the hard part.... prompt the user for their name.
	printf("Please enter your name: ");
	string name = GetString();

	// open the file output.txt for writing
	FILE *out = fopen("output.txt", "w");

	if (out == NULL) {
		// failed to open the file for writing
		return 1;
	} else {
		// print "Hi NAME!" to the file
		fprintf(out, "Hi %s!\n", name);

		// close the file.
		fclose(out);
	}

}