// var Console = function() {
// 	this.log = function(msg) { debug(msg); };
// };
// var console = new Console();

/**
 * Declaration and Data Type
 */
 //TRY TO WRITE WITH MAX LINE WIDTH OF 55
var dataType = () => {
	"use strict";

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
	//Data types

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
	//type = number. Not a number
	let iAmNaN = NaN; 
	//type = Symbol. new in ECMAScript 6
	let iAmSymbol = Symbol('ID');

};
/**
 * Double, Triple and SameValue equality
 */
var equality = () => {
	'use strict';
	//double equal
	var plusZero = 0; //+ve sign 
	var minusZero = - 0; // zero with -ve sign
	var blank = ' '; //A blank space string

	//Abstract equality
	console.log(plusZero == minusZero); // true
	console.log(plusZero == blank); //prints true
	console.log(NaN == NaN); // prints false

	//Strict Equality Comparison / Tripple equal
	console.log(plusZero === minusZero); // true
	console.log(plusZero === blank); // prints true
	console.log(NaN === NaN); // prints false

	// SameValue comparison:
	//Same as triple equal except for +0, -0 and NaN
	console.log(Object.is(plusZero, minusZero)); //false
	console.log(Object.is(NaN, NaN)); // true
	console.log(Object.is(plusZero, blank)); // false


	//Abstract Equality Comparison / Loose equality / double equal

};

/**
 * if, while and for syntax
 */
 var controlFlow = () => {
	'use strict';

	var iAmDecider = true;
	if (iAmDecider) {
		console.log('iAmDecider is true');
	} else {
		console.log('iAmDecider is false');
	}


	//while
	var repeat = 0;
	iAmDecider = true;
	repeat = 0;
	while (iAmDecider) {
		console.log('iAmDecider is true');
		repeat++; //increaments by 1
		//iAmDecider changed to false after 5 times
		if (repeat >= 5) iAmDecider = false;
	}
	//do-while, always executes atleast once
	do {
		console.log('iAmDecider is true');
		repeat++; //I'll be increamented by 1
		//I do not want to keep printing after 5 timess
		if (repeat >= 5) iAmDecider = false;
	} while (iAmDecider);

	//for
	for (var times = 5; times >= 0; times--) {
		console.log('I\'ll be printed ' + times);
	}

	//Switch
	var switchController = 'Green';
	switch (switchController) {
		case 'Red':
			console.log('Switch Controller will take Green');
			break;
		case 'Blue':
			console.log('Switch Controller will take Green');
			break; //If I am not present, I'll execute undesired code
		case 'Green': //as switchController is Green.
			//This case to be executed
			console.log('Thank you switch controller.');
			//I'll keep executing things until I find break
		default: //I am optional
			console.log('I\'ll also be printed as break was not found');

	}

};

/**
 * Working with String
 */
var stringManipulation = () => {
	'use strict';
	console.log('=============== STRING MANIPULATION ===============')

	//Adding multiple string. Mehak is my daughter
	var addedString = 'Add Mehak, ' + 'Aayan too.';
	//geting length
	var lengthOfStr = addedString.length;//21

	var partialStr = 'a';
	//Geting index of a partial string. index is counted starting from 0
	var indexPostion1st = addedString.indexOf(partialStr); //11
	//Getting last position of a partial string
	var indexPostionLast = addedString.lastIndexOf(partialStr);//11
	//finding index for a RegExp. /(mehak|me)/i is a regexp
	var indexPositionSearch 
			= addedString.search(/(mehak|aayan)/i);//3
	//Using replace gives 'Add Manoj, me too.'
	var replaceFirst = 
		addedString.replace(/(mehak|aayan)/i, 'Kid');
	var replaceAll = 
			addedString.replace(/(mehak|aayan)/ig, 'Kid');
	//substring fromIndex to toIndex
	var substringFromM2N = addedString.substring(4, 9);//Mehak
	//substr fromIndex to toLength. It can take -ve parameter meaning index from end
	var substrFromIndex = addedString.substr(-4);//Mehak, me too.
	var substrFromM2Length = addedString.substr(4, 5);//Mehak
	//Slice a string. Slice can take -ve parameter meaning index from end
	var sliceFromM2N1 = addedString.slice(4, 9);//Mehak
	var sliceFromM2N2 = addedString.slice(-10, -5);//Mehak

	console.log('Length of \'' + addedString + '\' = ' + lengthOfStr);
	console.log('1st index of ' + partialStr + ' in the addedString = ' + indexPostion1st);
	console.log('Last index of ' + partialStr + ' in the addedString = ' + indexPostionLast);
	console.log('1st index of Mehak or Aayan in the addedString ignoring case = ' + indexPositionSearch);
	console.log('String after replace = \'' + replaceFirst + '\'');
	console.log('String after replace all = \'' + replaceAll + '\'');
	console.log('Sliced String1 = ' + sliceFromM2N1);
	console.log('Sliced String2 = ' + sliceFromM2N2);
	console.log('Substring String = ' + substringFromM2N);
	console.log('Substr String from index = ' + substrFromIndex);
	console.log('Substr String = ' + substrFromM2Length);
};

/**
 * Functions
 */
var writingFunctions = () => {
	'use strict';

	console.log('=============== WRITING FUNCTIONS ===============')


	//Named functions
	function iAmSumFunction(iAmParam1, iAmParam2) {
		return iAmParam1 + iAmParam2;
	}
	//Named function with optional parameter
	//In error trace name of the function would appear
	function iAmDivideFunction(iAmParam1, iAmParam2 = 1) {
		return (iAmParam1 / iAmParam2);
	};

	//Anonymous function with optional parameter
	var iAmMultiplyFunction = function(iAmParam1, iAmParam2 = 1) {
		return iAmParam1 * iAmParam2;
	};
	//Arrow function with optional parameter
	var iAmSubstractFunction = (iAmParam1, iAmParam2 = 0) => {
		return (iAmParam1 - iAmParam2);
	};
	//Copact arrow function
	var iAmSubstractFunction2 = (iAmParam1, iAmParam2 = 0) => (iAmParam1 - iAmParam2);
	//Compact arrow function with single parameter
	var iAmSquareFunction = iAmParam => (iAmParam * iAmParam);
	//IIFE: immediately invoked function expression
	(function() {
		//I am a function which executes immediately after declaration
		console.log('I hate waiting, and execute immediately.');
	}());

	//using arrow
	(() => {
		console.log('I also execute immediately');
	})();

	console.log(iAmSubstractFunction2(20, 10));
	console.log(iAmDivideFunction(20, 10));
	console.log(iAmSquareFunction(20));

	//GENERATOR FUNCTION
	function * evenNumberGenerator() {
		var evenNumber = 0;
		while (evenNumber <= 8) {
			yield evenNumber+=2;
		}
	}
	//creating instance of the generator function
	var newGenerator = evenNumberGenerator();

	for (var i = 10; i > 0; i--) {
		var genEvenNum = newGenerator.next();
		if (!genEvenNum.done) {
			console.log('Generated even number = ' + genEvenNum.value);
		} else {
			console.log('Generator function is done!');
			break;
		}
	}

};

/**
 * Working with object and JSON
 */
var objectAndJSON = () => {
	'use strict';
	console.log('=============== OBJECTS AND JSON ===============')

	//This is a JSON Object
	var iAmJSON = {
		   simpleKey: 'iAmValue', 
		   listKey: ['var1', 'var2']
		 };
	//Converting a JSON Object to printable text/string
	//{"simpleKey":"iAmValue","listKey":["var1","var2"]}
	var iAmJSONString = JSON.stringify(iAmJSON);
	//Convert a JSON String to object
	var iAmBackToObject = JSON.parse(iAmJSONString);
	//Value from object can be extracted using these two ways
	var valueForKey = iAmBackToObject.simpleKey;
	var dynaKey = 'listKey';
	var valueForDynaKey = iAmBackToObject[dynaKey][0];

	console.log(iAmJSONString);
	console.log(valueForKey);
	console.log(valueForDynaKey);
};
//objectAndJSON();
/**
 * Working with Arrays
 */
var arrayManipulation = () => {
	'use strict';
	console.log('=============== ARRAY MANIPULATION ===============')
	//Declaration of an array
		var anArray = [23, 'abc', 
							{ a: 123, b: 'qwert'},
              () => 'abcd'];
    //get partial array from begin index to end index
    var copyArray = anArray.slice(0, 3);

    var spliceArray = anArray.splice();

    anArray.concat({abd: 123});

    copyArray[0] = 12;
		//Getting the value
		var element = anArray[3]; 
		//Changing the value
		anArray[0] = 32;
    var currentLength = anArray.length; //4 
    var names = ['John', 'Michel'];
    
    var lengthNew = names.unshift('Ramesh');

    var firstName = names.shift();

	var drinks = [];
	//ADD or REMOVE from end of array
	var lengthAfterAdd = drinks.push('Brandy');
	//lengthAfterAdd = 1
	lengthAfterAdd = drinks.push('Rum');
	//Now lengthAfterAdd = 2
	var removedElement = drinks.pop();
	//removedElement = 'Rum'; drinks = ['Brandy']
	var currentLength = drinks.length; // 1
	var kindlySplitMe = 'How to split long string';
	//.split(' ').reverse().join(' ').split('').reverse().join('');
	console.log(kindlySplitMe.split(' ').reverse().join(', '));

	console.log(kindlySplitMe.split(' ').reverse().join(' ').split('').reverse().join(''));

  console.log(anArray[3]());
  
  var concatArray = names.concat('Rakesh', 'Mahesh');
  console.log(concatArray);
  var drinks = ['Rum', 'Martini', 'Malibu'];
var copyDrinks = drinks.slice(); //a new copy
var partialCopy = drinks.slice(1, 3);
console.log(partialCopy);

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
//delete 3 elements starting with index 1
//B, C, D to be deleted
var deletedAlphabets = alphabets.splice(1, 3);
console.log(alphabets);
console.log(deletedAlphabets);

};
//arrayManipulation();

/**
 * Error handling
 */
(function() {
  'use strict';
  var testThis = {
    someKey: 'someValue',
    printThis: function() {console.log(this)}
  };
  
  testThis.printThis();
  
  var printThisFunction = testThis.printThis;
  
  printThisFunction();
}());

/**
 * closure in java script
 */
(function() {
  'use strict';
  function variableHoldingFunction(){
    var closureCandidate = 'Hello Geeks';
    return function() {
      console.log(closureCandidate);
    };
  }
  var closureFunc = variableHoldingFunction();
  //closureCandidate no more available in scope
  //It is stored in Closure scope
  closureFunc();


  var globalObj = {};
  function returnFunctionWithClosure() {
    //store globalObj in local var
    var localRef = globalObj;
    localRef.test = 'Function Scope';
    return function() {
      console.log(localRef.test);
    };
  }
  var closureWithGlobalRef 
          = returnFunctionWithClosure();
  globalObj.test = 'Gobal Scope';
  closureWithGlobalRef();

}());

/** call bind and apply */
(function(){
'use strict';
function thisLogger(comment) {
console.log(comment + ', this=' + this);
}
var myThis = 'myThis';
//I am fixing the value of this as myThis
//I can send any value including primitive
thisLogger.call(myThis, 'Sent my this');
//apply is exactly same except the parameters
//are passed as single array argument
thisLogger.apply(myThis, ['Sent my this']);

var myThis = 'myThis';
var fixedThis = function fixedThis(){
  console.log(this)
}.bind(myThis);
//The value is this is now fixed to myThis
fixedThis(); //print 'myThis'
//Sending new value of this does not change it
fixedThis.call('changedThis'); //print 'myThis'
fixedThis.apply('changedThis'); //print 'myThis'

}());

/** Class */
(function(){
  'use strict';
  var Person = (function(){
    function Person(name, salutation = 'Mr.') {
      this.name = name;
      this.salutation = salutation;
    }
    Person.prototype.getName = function(){
      return this.name
    };
    Person.prototype.greet = function() {
      console.log(`Hello ${this.salutation} ${this.name}`);
    };
    return Person;
  }());
  
  var manoj = new Person('Manoj');
  manoj.greet();
}());

(function(){
  'use strict';
  class Person {
    constructor(name, title='Mr.'){
      this.name = name;
      this.title = title;
    }
    greet() {
      console.log(`Hello ${this.title} ${this.name}`);
    }
  }
  
  let manoj = new Person('Manoj');
  manoj.greet();
  
}());

/** Handling errors */
(function(){
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
}());
