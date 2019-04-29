# What is Promise and how to work with it?

The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. [[2](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)]. A promise can have three state pending, fulfilled and rejected.

To understand promise lets take a look at the below function. It returns a promise with even number or gives error randomly.
```js
function randomEven() {
  let randomResolve 
    = new Promise((resolve, reject) => {
    //get a number between 1 & 10 randomly
    let numberBetween0And9 
      = Math.floor(Math.random() * 10);
    //check if the number is even
    let isEven = (numberBetween0And9 % 2 === 0);
    //resolve or reject after 1 sec
    setTimeout(() => {
      if (isEven) {
      //resolve if even
      resolve(numberBetween0And9);
      } else {
        //Reeject if odd
        reject('The number is odd');
      }
    }, 1000);
  });
  return randomResolve;
}
```
Using a function returning `Promise`.
```js
  var evenNumber = randomEven();
  //catch or then block executes after 1 sec
  //evenNumber is a promise which resolves in 1 sec
  evenNumber.then((evenNumber) => {
    //In case the Promise resolves
    console.log(evenNumber);
  }).catch((error) => {
    //In case Promise rejects
    console.log(error);
  });
  //This prints immediately
  console.log('I\m not blocked.');
```