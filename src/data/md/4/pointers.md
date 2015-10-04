## Pointers

- pointers store the addresses 
- to declare a pointer:

```c
int* ptr;		// ptr will store the address of an int.
```

- to get an address and store it in a pointer

```c
int x = 50;
ptr = &x;		// &x is the address of x
```

- to get the value a pointer references

```c
printf("%i", *ptr);
```

### Let's try it

Sketch out (on paper) what the following code does

```c
int x = 2, y = 8, z = 12;

int* ptr_x = &x;
int* ptr_y = &y;
int* ptr_z = &z;

z = x * y;
x *= y;
y = *ptr_x;
*ptr_x = x * y;
ptr_x = ptr_y;
x = (*ptr_y) * (*ptr_z);
```

Check your answer with <a href="data/problems/4/pointers.c" target="_blank">pointers.c</a>

### Arrays

- are pointers!

| C | S | 5 | 0 |
|----------|----------|----------|----------|
| `array[0]` | `array[1]` | `array[2]` | `array[3]` |
| `*(array)` | `*(array + 1)` | `*(array + 2)` | `*(array + 3)` |