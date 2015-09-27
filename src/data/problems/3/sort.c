#include <stdio.h>
#include <cs50.h>

void sort(int values[], int n);

int main(int argc, char **argv) {

	int length = argc - 1;
	int haystack[length];

	// feed values from argv into haystack as ints.
	for (int i = 0; i < length; i++) {
		haystack[i] = atoi(argv[i+1]);
	}

	// sort the array
	sort(haystack, length);

	// print out the sorted array
	for (int i = 0; i < length; i++) {
		printf("%d ", haystack[i]);
	}
	printf("\n");
}

void sort(int values[], int n) {
	// sort the array here.
}