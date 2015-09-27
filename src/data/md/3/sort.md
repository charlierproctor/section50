## Sorting

| Algorithm 		| O 			| &#937; 			|
|-------------------|---------------|-------------------|
| [Bubble Sort](https://study.cs50.net/bubble_sort) 		| `O(n^2)` 		| &#937;`(n)` 		|
| [Selection Sort](https://study.cs50.net/selection_sort) 	| `O(n^2)` 		| &#937;`(n^2)`		|
| [Insertion Sort](https://study.cs50.net/insertion_sort) 	| `O(n^2)` 		| &#937;`(n)` 		|
| [Merge Sort](https://study.cs50.net/merge_sort)		| `O(n log(n))`	| &#937;`(n log(n))`|

### Bubble Sort

[CS50 Study](https://study.cs50.net/bubble_sort)

Adjacent values are swapped until the array is completely sorted. This algorithm gets its name from the way values eventually "bubble" up to their proper position in the sorted array.

### Selection Sort

[CS50 Study](https://study.cs50.net/selection_sort)

Data is divided into sorted and unsorted portions. One by one, the smallest values remaining in the unsorted portion are selected and swapped over to the sorted portion of the array.

### Insertion Sort

[CS50 Study](https://study.cs50.net/insertion_sort)

Data is divided into sorted and unsorted portions. One by one, the unsorted values are inserted into their appropriate positions in the sorted subarray.

```
Question: Compare and contrast these three sorting methods.
```

### Merge Sort 

[CS50 Study](https://study.cs50.net/merge_sort)

Merge sort is a recursive algorithm for sorting that decomposes the large problem of sorting an array into subproblems that are each a step closer to being solved. The basic idea is to handle sorting by dividing an unsorted array in two and then sorting the two halves of that array recursively.

### Let's try it!

With a partner, implement one of the sorting algorithms. Whichever one you implement here, please choose a **different** one for homework.

```bash
charlie@ide50:~/workspace $ ./sort 8 4 2 6 10
2 4 6 8 10
charlie@ide50:~/workspace $ ./sort 5 7 3 9 1
1 3 5 7 9
```
