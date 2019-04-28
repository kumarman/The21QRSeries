'use strict';
//Creating a custom error
let customError1 = new Error('Custom Error');
let customError2 = Error('Custom Error');
//both errors have exactly same behavior

//Throwing a custom error
throw customError1;
throw(customError2);
// A simple string can be thrown
throw 'I am an error';
throw ('I am an error');
//A boolean or number also
throw true;
throw 6;

function throwsAnError(){
  //Throw an error message
  throw('This is an error message');
}
function throwsBoolean(){
  //Throw an error message
  throw true;
}
function createNewError() {
  var myError = new Error('This is my error');
  var sameError = Error('This is my error');
  return sameError;
}

try {
  //eval("alert('Hello)");
  //throwsAnError();
  //throw(createNewError());
  throwsBoolean();
} catch (error) {
  //Catching an error
  console.log(error);
  //console.log(error.message);
} finally {
  //Executes always in all cases
  console.log('Log me in all cases');
}