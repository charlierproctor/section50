#include <stdio.h>

int main(int argc, char const *argv[]) {
	
	// hot tip: use the debugger to see the values!

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

	return 0;
}