## Functions

- Functions take in `[parameters]`, do something `[methods]`, and spit out an answer `[return value]`.
- Why do we want functions?
- We've already seen one: `int main(void)`
	- `int` is the return type
	- `main` is the function name
	- `void` is the parameter, which in this case is nothing
- Must declare functions before they're used: prototypes.

```c 
// this is my prototype -- must appear before `useful` is called.
void orderPizza(int number);

// print the number of pizzas ordered.
void orderPizza(int number) {
    printf("You ordered %i pizzas.\n", number);
}
```

### Scope

- Functions have their own scope.

```c
// GOOD

void orderPizza(int number);

int main(void){
	int num = 15;
	orderPizza(num);
}

// we pass in the number of pizzas we want
void orderPizza(int number) {
	// `number` passed in as argument
	printf("You ordered %i pizzas.\n", number);
}
```

---------------

```c
// BAD

void orderPizza();

int main(void){
	int num = 15;
	orderPizza();
}

// we don't pass anything in
void orderPizza() {
	// `num` is not accessible here!!
	printf("You ordered %i pizzas.\n", num);
}
```


### Let's try it!

1. Create a function `printer` that prints whatever you pass to it. 
	```bash
	charlie@ide50:~/workspace $ ./functions
	Please give me a string: I want to ride my bicycle.
	I want to ride my bicycle.
	```