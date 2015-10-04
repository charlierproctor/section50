## Dynamic Memory Allocation

- when running a program you can divide memory into 2 basic regions: the heap and the stack.

![](data/md/4/memory.png)

### Stack

- a contiguous black of memory set aside when a program starts running. 
- holds metadata, variables held in `read-only` memory, and **all local variables**.
- each function gets its own stack frame. 
	- a function's variables are protected from other functions and localized with their own scope

### Heap

- memory allocated during runtime is called dynamically allocated memory and it's held on the **heap**.
- the heap is an region of unused memory that can be allocated with a call to `malloc()`

```c
// returns a pointer to space for 4 bytes on the heap
int *ptr = malloc(sizeof(int))
```

- the heap can be used to store data, it can be passed between functions, and unlike stack variables, it won’t be lost when a function returns.
- must use `free()` to unallocate this space when you're done, otherwise you're program will leak memory.

```c 
int* ptr = malloc(sizeof(int));
*ptr = GetInt();
if (*ptr <= 0)
{
    free(ptr);
}
else
{
    printf("That was a positive number!\n");
}
free(ptr);
```