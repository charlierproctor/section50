#include <stdio.h>
#include <stdlib.h>

int main(void) {

    // malloc for a new array
    char* arr = malloc(5 * sizeof(char));
    
    // set the values of this array
    arr[0] = 'C';
    arr[1] = 'S';
    arr[2] = '5';
    arr[3] = '0';
    arr[4] = '\0';
    
    // free it!
    free(arr);

}