# Declaration & Data Types? {#chapter2 .chapter}

A variable is declared in JavaScript using `var`, `let` or const. let and const follow block, local and global scope. var follows local or function and global scope only.

```js
var varWithoutInitialize;
var varWithInitialize = 'SomeValue';
var myBoolean = true;
if (myBoolean) {
	let blockScoped = 'Inside if block';
	var iDoNotFollowBlockScope 
				= 'Available outside the if block';
	const iCanNotBeReassigned 
				= 'I can not change';
	// Error: Assignment to constant variable
	iCanNotBeReassigned = 'I want to change';
}
//Error: blockScoped is not defined
console.log(blockScoped);
//Prints the value defined inside if block
console.log(iDoNotFollowBlockScope);
```
**`var`**:	var is used to declare a variable optionally to initialise to a value. Variables defined using var keyword inside a for, if or while block would be available outside the block scope also.

**`let`**: A variable declared using let inside a for, if or while block wouldn’t be available outside the block scope. 

**`const`**: As the name suggests, const is used to define a read only variable which can not be re-assigned to any other value. Just like let, const is also not available outside the block scope if defined in a block.

JS has the following data types.

```js

//type = number. Between -(2^53 -1) and 2^53 -1
let iAmANumber = 2; 
//type = string
let iAmString = 'Example String'; 
//type = boolean
let iAmBoolean = true; 
// type = object, value is absent for the var
let iAmNull = null; 
//type = undefined
let iAmUndefined = undefined; 
//type = object
let iAmObject = { 'iAmKey': 'iAmValue' }; 
//type = NaN. Not a number
let iAmNaN = NaN; 
//type = Symbol. new in ECMAScript 6
let iAmSymbol = Symbol('ID');
```

**number**: any number between -(253-1) and 253-1

**string**: any data in text format.

**boolean**: it can have only two possible values true/false.

**null**: this type has only one value and is null.

**undefined**: a variable which has not been initialised has a value of undefined.

**object**: objects are stored in heap memory.

**NaN**: not a number. It has a very unique feature that NaN equals to itself is false.

**Symbol**: It is a unique and immutable primitive value. It was introduced in ECMAScript 6.
