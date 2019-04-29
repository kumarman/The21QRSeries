# What is setTimeout and setInterval?

`setTimeout` is used to execute some code after a specified amount of time. The function defined in setTimeout is queued in event loop after the specified interval. The execution would happen after the timeout, but might not execute immediately after timeout.
```js
setTimeout(() => {
 console.log('Executes after timeout');
}, 1000);
//above code executes afte 1000ms
```
`setTimeout` with 0ms timeout.
```js
//Making timeout 0 does not make it synchronous
setTimeout(() => {
 console.log('Executes after 0 ms');
}, 0);
console.log('Execute on main thread.');
//above prints
//Execute on main thread.
//Executes after 0 ms
```
`setInterval` is used to execute some come repeatedly at an interval.
```js
setInterval(function(){
  console.log('I am printed at an interval of 1 sec.');
}, 1000);
```