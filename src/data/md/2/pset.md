## PSet Review

- Crypto this week!
	- User inputs how many positions to rotate characters in target word.

	```bash
	charlie@ide50:~/workspace $ ./caesar 1
	Charlie
	Dibsmjf
	```

- All command line arguments are strings!
	- use `atoi()`
- Be careful about rotating too far. (`%` hint, hint...)
- Vigenere: in place of an `int`, you'll use a `string` to encrypt the target word.

### Practice: Modulo