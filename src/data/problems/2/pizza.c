#include <stdio.h>
#include <cs50.h>

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