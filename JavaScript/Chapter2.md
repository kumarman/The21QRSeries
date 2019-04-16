# Declaration & Data Types? {#chapter2 .chapter}

A variable is declared in JavaScript using var, let or const. let and const follow block, local and global scope. var follows local or function and global scope only.

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
	// This throws error
	iCanNotBeReassigned = 'I want to change';
}
//Prints the value defined inside if block
console.log(iDoNotFollowBlockScope);
//this throws error
console.log(blockScoped);
```
