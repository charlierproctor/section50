## Hash Tables

- an associative array where the position of each element in the array is decided by a hash function
- hash function could be anything: 
	- sum of the characters in the word, numerical value of the first letter in the word, etc...
- when there are collisions, you have two options:
	- chain items together (eg, with a linked list)
	- probe for an open index

![](data/md/5/hash_table.jpg)