# What is `this` keyword?

`this` = the context object in which the code executes.  
The value of `this` could be different depending on how the code is executed.  
The default context in non-strict mode is object `window` in browser or object `global` in node. In strict mode the default context is `undefined`.

```js
console.log(this);
//In non-strict mode this = window object
//In strict mode this = undefined
var testThis = {
  someKey: 'someValue',
  printThis: function() {console.log(this)}
};

testThis.printThis();
//In above case context is testThis object so this = testThis
var printThisFunction = testThis.printThis;
printThisFunction();
//printThisFunction is executing in main context 
//so this = window or undefined depending on strict mode
```
**Note: The above behavior would change if printThis function is defined using arrow(=>) function**.
