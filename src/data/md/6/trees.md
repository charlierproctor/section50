## Trees and Tries

- Every trie is a tree but not all trees are tries!
	- Many different types of trees: red-black trees, 2-3 trees, binary trees, etc..
	- A tree is any data structure where data is organized hierarchically, with root nodes pointing to child nodes.
	- Recall the binary search tree.

![](data/md/6/binary_search.jpg)

- A Trie is a special kind of tree used primarily to store strings.

```c
typedef struct node
{
    // marker for end of word
    bool is_word;

    // array of node* that
    struct node* children[27];

} node;
```

- tries try to capitalize on constant-time lookup of arrays.... but they use a lot of space!