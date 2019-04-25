# What is hoisting of variable and function?

A variable defined with `var` and a `function` can be used before it is declared.
```js
hositedExecute();
function hositedExecute(){
  console.log('In hositedExecute function');
}
//Use of variable
console.log(iAmDefinedLater); //prints undefined
var iAmDefinedLater = 'hoisted';
//Not defining iAmDefinedLater ever throws error
```
Above is possible because of hoisting. All the functions are placed at the top of the scope. And variable declared using `var` keyword is kept at the top leaving the assignment at the same place. e.g.

This code
```js
anyFunction();
var aVariable = 'global';
function anyFunction() {
  console.log('anyFunction executed');
  //Error: localFunction is until now undefined
  localFunction(); //If commented
  //Would print 'anyFunction executed undefined'
  var aVariable = 'local';
  var localFunction = function(){
    console.log('localFunction executed');
  };
}
```
tranforms to
```js
var aVariable; //declaration shifted to top
//Full function moved to top
function anyFunction() {
  //exactly same happes inside a function too
  var aVariable;
  var localFunction;
  console.log('anyFunction executed ');
  localFunction();
  aVariable = 'local';
  localFunction = function() {
      console.log('localFunction executed ');
    }; 
}
anyFunction();
aVariable = 'global';
```
Variables defined with `let` and `const` are not hoisted.
```js
console.log(definedWithLet);//Gives Error
let definedWithLet = 'let';
```
Variable defined with `const` can not be hoisted as once a value is assigned to const variables, it can not be modified or reassigned.
