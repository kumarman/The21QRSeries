# How to write functions? {#chapter6 .chapter}

Named function, just the most common, classic way of writing a function.
```js
function iAmSumFunction(iAmParam1, iAmParam2) {
	return iAmParam1 + iAmParam2;
}
```

Named function with optional parameter.
```js
function iAmDivideFunction(iAmParam1, iAmParam2 = 1) {
	return (iAmParam1 / iAmParam2);
};

iAmDivideFunction(20); //returns 20
iAmDivideFunction(20, 10); //returns 2
```

Anonymous function with optinal parameter.
```js
var multiply = function(iAmParam1, iAmParam2 = 1) {
	return iAmParam1 * iAmParam2;
};
multiply(5); // returns 5
multiply(5, 2); // returns 10
```

Anonymous arrow function
```js
var substract = (iAmParam1, iAmParam2 = 0) => {
		return (iAmParam1 - iAmParam2);
	};
subtract(4); //returns 4
subtract(4, 1); // returns 3 
```

Compact arrow function
```js
var subtract_compact = (iAmParam1, iAmParam2 = 0) => (iAmParam1 - iAmParam2);
```

Compact arrow function with single parameter
```js
var square = iAmParam => (iAmParam * iAmParam);
square(2); //returns 4
```

Arrow function with no parameter
```js
var printSomething = () => {
	console.log('Something :)');
}
```
IIFE: Immediately invoked function expression.
```js
(function() {
	console.log('I execute immediately');
}());
//using arrow
(() => {
	console.log('I also execute immediately');
}());
```

Generator function
```js
//Generates even number upto 10
function * evenNumberGenerator() {
	var evenNumber = 0;
	while (evenNumber <= 8) {
		yield evenNumber+=2;
	}
}
//creating instance of the generator function
var newGenerator = evenNumberGenerator();

for (var i = 10; i > 0; i--) {
	var genEvenNum = newGenerator.next();
	if (!genEvenNum.done) {
		console.log('Generated even number = ' 
			+ genEvenNum.value);
	} else {
		console.log('Generator function is done!');
		break;
	}
}
```
Executing the above generator code prints  
Generated even number = 2  
Generated even number = 4  
Generated even number = 6  
Generated even number = 8  
Generated even number = 10  
Generator function is done!  

