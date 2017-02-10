# Mere+ - extended Mere library

Mere+ (mere-plus) provides an extension of a [![Mere](https://github.com/GlaDos28/mere)]() library.
To see what Mere library does, look at its [![README](https://github.com/GlaDos28/mere/blob/master/README.md)]().

<img src="https://s28.postimg.org/5j9r5brv1/danger.png"> ***The library is under construction, but it is partly accesed now!*** <img src="https://s28.postimg.org/5j9r5brv1/danger.png">

Overall list of new instruments:

- testing <img src="https://s27.postimg.org/3npt6xm9f/unchecked_1.png">
- dependency tree <img src="https://s27.postimg.org/3npt6xm9f/unchecked_1.png">
- gain statistic <img src="https://s27.postimg.org/3npt6xm9f/unchecked_1.png">
- memoization <img src="https://s24.postimg.org/4ar2fhkk5/checked.png">

___

### Extensions

##### Memoization

```javascript
task.memoize();
```

Application will save the result for each argument combination. Note that responsibility of task memoization is laid on user.
Excess arguments are removed when checking memoization data, as well as missing arguments are put undefined.

### Examples

##### Fibonacci with memoization

```javascript
require("mere");

"fib".bind((k) => {
	if (k <= 2)
		return 1;
	
	return "fib".make(k - 1) + "fib".make(k - 2);
});

"fib".memoize();

console.log("fib".make(50));
```

