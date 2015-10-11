## Linked Lists

- an ordered collection of nodes, which together represent a sequence.

![](data/md/5/linked_list.png)

- each node is a separate object, generally defined as follows:

	```c
	typedef struct node
	{
	    // just some form of data; could be a char* or whatever
	    int i;

	    // pointer to next node; have to include 'struct' since this is a recursive definition
	    struct node* next;

	} node;
	```

- the end of a linked list is always marked by a pointer to `NULL`
- to iterate over a list, use a `node* head_ptr` and simply loop through the list until its next field points to `NULL`
- to insert / delete a node, change where the `node* next` points to.