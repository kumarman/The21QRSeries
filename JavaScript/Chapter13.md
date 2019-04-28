# What is the difference between call, bind and apply?

The value of `this` depends on how the code is executed rather how the code has been written. These functions are used to stablize the value of `this`.

`call` and `apply` are used like this.
```js
function thisLogger(comment) {
console.log(comment + ', this=' + this);
}
var myThis = {'key' : 'value'};
//Fixing the value of this as myThis
//any value including primitive can be sent
thisLogger.call(myThis, 'Sent my this');
//apply is exactly same except the parameters
//are passed as single array argument
thisLogger.apply(myThis, ['Sent my this']);
```

`bind` is used to fix the value of `this` when a function is defined 
```js
var myThis = 'myThis';
var fixedThis = function fixedThis(){
  console.log(this)
}.bind(myThis);
//The value is this is now fixed to myThis
fixedThis(); //print 'myThis'
//Sending new value of this does not change it
fixedThis.call('changedThis'); //print 'myThis'
fixedThis.apply('changedThis'); //print 'myThis'
```
`bind` can only be used when it is assigned to some variable. It can't be used like this.
```js
//CAN NOT BE USED LIKE THIS
function fixedThis(){
  console.log(this)
}.bind(myThis); //This gives error
```