# Control flow (if, while and for) syntax? {#cahper4 .chapter}

`if` block

```js
var iAmDecider = true;
if (iAmDecider) {
	console.log('iAmDecider is true');
} else {
	console.log('iAmDecider is false');
}
```

`while` loop

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

`do-while` loop

```js
var iAmDecider = true;
var repeat = 0;
//do-while, always executes atleast once
do {
	console.log('iAmDecider is true');
	repeat++; //I'll be increamented by 1
	//I do not want to print after 5 times
	if (repeat >= 5) iAmDecider = false;
} while (iAmDecider);
```

`for` loop

```js
for (var times = 5; times >= 0; times--) {
	console.log('I\'ll be printed ' + times);
}
``` 
`for...in` and `for...of` iteration. `for...in` iterates over property names, `for...of` iterates over value.
```js
var iterateMe = [3, 4, 5];
iterateMe.somekey = 7;
//Using for...in
for (let key in iterateMe) {
  console.log(key);
  //prints 0, 1, 2, somekey
}
//Uisng for...of
for (let value of iterateMe) {
  console.log(value);
  //prints 3, 4, 5
}
```

`switch`

```js
var color = 'Green';
switch (color) {
	case 'Red':
		console.log('Value of color is Red');
		break;
	case 'Blue':
		console.log('Value of color is Blue');
		break;
	case 'Green': //as color = Green.
		//This case to be executed
		console.log('Thank you switch.');
	//keep executing untill it finds `break` or end
	default: //I am optional
		console.log('I am default');
}
```