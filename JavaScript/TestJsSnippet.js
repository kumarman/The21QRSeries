/**
 * This function returns a promise of even 
 * number which resolves after 1 sec.
 * If random number is odd, the promise rejects
 */
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
setInterval(function(){
  var evenNumber = randomEven();
  evenNumber.then((evenNumber) => {
    console.log(evenNumber);
  }).catch((error) => {
    console.log(error);
  });
}, 1000);
console.log('I\'m not blocked');


setTimeout(() => {
  console.log('Executes after 0 ms');
 }, 0);
 console.log('Execute on main thread.');