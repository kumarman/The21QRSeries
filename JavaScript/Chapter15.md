# How to handle errors?

Creating a custom error.
```js
//Creating a custom error
let customError1 = new Error('Custom Error');
let customError2 = Error('Custom Error');
//both errors have exactly same behavior
```
Throwing an error.
```js
//Throwing a custom error
throw customError1;
throw(customError2);
// A simple string can be thrown
throw 'I am an error';
throw ('I am an error');
//A boolean or number also
throw true;
throw 6;
```
`try...catch...finally` block.
```js
try {
  let customError1 = new Error('Custom Error');
  throw customError1;
} catch (error) {
  console.log(error.message);
  //prints 'Custom Error'
} finally {
  //Executes always in all cases
  console.log('I am logged in all cases');
}
```
