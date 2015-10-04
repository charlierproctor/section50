#include <stdio.h>
#include <cs50.h>

int main(int argc, const char *argv[]){
    if (argc != 2) {
    	// print error message and exit
        fprintf(stderr,"USAGE: ./name NAME\n");
        return 1;
    } else {
    	// print the name
        printf("%s", argv[1]);
    }
}