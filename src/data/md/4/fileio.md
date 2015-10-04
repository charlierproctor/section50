## File I/O

So far, we've been printing to `stdout` (the computer screen) and taken input after prompting the user (eg, `GetString()`).

Now we'll see how to write out to a file or read in from a file.

Here's the basic structure:

```c
#include <stdio.h>

int main(void)
{
    // open file "input.txt" in read only mode
    FILE* in = fopen("input.txt", "r");

    // always make sure fopen() doesn't return NULL!
    if(in == NULL)
        return 1;
    else
    {
        // open file "output.txt" in write only mode
        FILE* out = fopen("output.txt", "w");

        // make sure you could open file
        if(out == NULL)
            return 2;

        // get character
        int c = fgetc(in);

        while(c != EOF)
        {
            // write chracter to output file
            fputc(c, out);
            c = fgetc(in);
        }

        // close files to avoid memory leaks!
        fclose(in);
        fclose(out);
    }
}
```

### Important Point(er)s

- always make sure `fopen()` doesn't return `NULL`!
	- when could this happen?
- when you `fopen()` a file, you are creating a `FILE` pointer that points to a `FILE` struct.
	- you then pass this reference around to `fread`, `fwrite`, ...
- make sure to `fclose()` when you're done with a file. Failing to do so will cause your program to leak memory. `fclose()` recycles memory, returning it to the heap.
- `fopen()`, `fread()`, `fwrite()`, `fgets()`, `fputs()`, `fgetc()`, `fscanf()`

### Let's try it!
