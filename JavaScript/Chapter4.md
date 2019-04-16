# Control flow (if, while and for) syntax? {#cahper4 .chapter}

* `if` block

```js
var iAmDecider = true;
if (iAmDecider) {
	console.log('iAmDecider is true');
} else {
	console.log('iAmDecider is false');
}
```

* `while` loop

```js
var repeat = 0;
var iAmDecider = true;
while (iAmDecider) {
	console.log('iAmDecider is true');
	repeat++; //increaments by 1
	//iAmDecider changed to false after 5 times
	if (repeat >= 5) iAmDecider = false;
}
```

* `do-while` loop

```js
var iAmDecider = true;
var repeat = 0;
//do-while, always executes atleast once
do {
	console.log('iAmDecider is true');
	repeat++; //I'll be increamented by 1
	//I do not want to keep printing after 5 times
	if (repeat >= 5) iAmDecider = false;
} while (iAmDecider);
```

* `for` loop

```js
for (var times = 5; times >= 0; times--) {
	console.log('I\'ll be printed ' + times);
}
``` 

* `switch`

```js
var color = 'Green';
switch (color) {
	case 'Red':
		console.log('Value of color is Red');
		break;
	case 'Blue':
		console.log('Value of color is Blue');
		break;
	case 'Green': //as color is Green.
		//This case to be executed
		console.log('Thank you switch controller.');
	//I'll keep executing things until I find break
	default: //I am optional
		console.log('I am default');
}
```