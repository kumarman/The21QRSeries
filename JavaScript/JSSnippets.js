// var Console = function() {
// 	this.log = function(msg) { debug(msg); };
// };
// var console = new Console();

/**
 * Declaration and Data Type
 */
 //TRY TO WRITE WITH MAX LINE WIDTH OF 55
var dataType = function() {
	"use strict";

	//Declaration
	var myVarWithoutInitialize;
	var myVarWithInitialize = 'SomeValue';

	var myBoolean = true;
	if (myBoolean) {
		let localBlockScoped = 'I am available inside the current if block';
		var iDoNotFollowBlockScope = 'I am also available outside the if block';
		const iCanNotBeReassigned = 'I am final. Also available within the block only';
		//iCanNotBeReassigned = 'I want to change'; // This throws error
	}
	//This would print the value defined inside if block
	console.log(iDoNotFollowBlockScope);

	//Data types
	let iAmANumber = 2; // type = number. Between -(2^^53 -1) and 2^^53 -1
	let iAmString = 'Example String'; // type = string
	let iAmBoolean = true; // type = boolean
	let iAmNull = null; // special value to say value is absent for the var
	let iAmUndefined = undefined; // type = undefined
	let iAmObject = { 'iAmKey': 'iAmValue' }; // type = object
	let iAmNaN = NaN; //Not a number
	let iAmSymbol = Symbol("ID");//type = Symbol. new in ECMAScript 6

};
/**
 * Double, Triple and SameValue equality
 */
var equality = () => {
	'use strict';

	var iAmComparedWith = 0; // zero with +ve sign or no sign
	var iAmThatWith = - 0; // zero with -ve sign
	//Abstract Equality Comparison / Loose equality / double equal
	console.log(iAmComparedWith == iAmThatWith); //prints true
	//Strict Equality Comparison / Tripple equal
	console.log(iAmComparedWith === iAmThatWith); // prints true
	// SameValue comparison:
	//It's same as triple equality except for +0, -0 and NaN
	console.log(Object.is(iAmComparedWith, iAmThatWith)); //prints false

	iAmThatWith = ' '; //A blank space string
	console.log(iAmComparedWith == iAmThatWith); //prints true
	console.log(iAmComparedWith === iAmThatWith); // prints true
	console.log(Object.is(iAmComparedWith, iAmThatWith)); //prints false

	console.log(NaN === NaN); // prints false
	console.log(Object.is(NaN, NaN)); //prints true
};

/**
 * if, while and for syntax
 */
 var controlFlow = () => {
	'use strict';

	var iAmDecider = true;
	if (iAmDecider) {
		console.log('I was allowed by decider. -:)');
	} else {
		console.log('When if block executes, I can relax -:)');
	}
	var iWasPrintedThisManyTimes = 0;
	//do-while
	do {
		console.log('I have to keep printing until iAmDecider is false');
		iWasPrintedThisManyTimes++; //I'll be increamented by 1
		//I do not want to keep printing after 5 times
		if (iWasPrintedThisManyTimes >= 5) iAmDecider = false;
	} while (iAmDecider);
	//while
	iAmDecider = true;
	iWasPrintedThisManyTimes = 0;
	while (iAmDecider) {
		console.log('I have to keep printing until iAmDecider is false');
		iWasPrintedThisManyTimes++; //I'll be increamented by 1
		//I do not want to keep printing after 5 times
		if (iWasPrintedThisManyTimes >= 5) iAmDecider = false;
	}
	//for
	for (var thisManyTimes = 5; thisManyTimes >= 0; thisManyTimes--) {
		console.log('I\'ll be printed ' + thisManyTimes);
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
	var addedString = 'Add Mehak, ' + 'me too.';
	//geting length
	var lengthOfStr = addedString.length;//18
	//Geting index of a partial string. index is counted starting from 0
	var indexPostionOfMe1st = addedString.indexOf('me'); //11
	//Getting last position of a partial string
	var indexPostionOfMeLast = addedString.lastIndexOf('me');//11
	//finding index for a RegExp. /(mehak|me)/i is a regexp
	var indexPositionSearch = addedString.search(/(mehak|me)/i);//3
	//Using replace gives 'Add Manoj, me too.'
	var stringAfterReplacing = addedString.replace(/(mehak|me)/i, 'Manoj');
	//substring fromIndex to toIndex
	var substringFromM2N = addedString.substring(4, 9);//Mehak
	//substr fromIndex to toLength. It can take -ve parameter meaning index from end
	var substrFromM2Length = addedString.substr(4);//Mehak, me too.
	substrFromM2Length = addedString.substr(4, 4);//Meha
	//Slice a string. Slice can take -ve parameter meaning index from end
	var sliceFromM2N = addedString.slice(4, 9);//Mehak
	sliceFromM2N = addedString.slice(-14, -9);//Mehak

	console.log('Length of \'' + addedString + '\' = ' + lengthOfStr);
	console.log('1st index of me in the addedString = ' + indexPostionOfMe1st);
	console.log('Last index of me in the addedString = ' + indexPostionOfMeLast);
	console.log('1st index of Mehak or me in the addedString ignoring case = ' + indexPositionSearch);
	console.log('String after replace = \'' + stringAfterReplacing + '\'');
	console.log('Sliced String = ' + sliceFromM2N);
	console.log('Substring String = ' + substringFromM2N);
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
	var dividerFunction = function iAmDivideFunction(iAmParam1, iAmParam2 = 1) {
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
	(function(){
		//I am a function which executes immediately after declaration
		console.log('I hate waiting, and execute immediately.');
	}());



	console.log(iAmSubstractFunction2(20, 10));
	console.log(dividerFunction(20, 10));
	console.log(iAmSquareFunction(20));

	//GENERATOR FUNCTION
	function * nextEvenNumber() {
		var evenNumber = 0;
		while (evenNumber <= 8) {
			yield evenNumber+=2;
		}
	}
	//creating instance of the generator function
	var evenNumberGenerator = nextEvenNumber();

	for (var i = 10; i > 0; i--) {
		var genEvenNum = evenNumberGenerator.next();
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
	var iAmJSON = {iAmSimpleKey: 'iAmValue', iAmListKey: ['var1', 'var2']};
	//Converting a JSON Object to printable text/string
	//{"iAmSimpleKey":"iAmValue","iAmListKey":["var1","var2"]}
	var iAmJSONString = JSON.stringify(iAmJSON);
	//Convert a JSON String to object
	var iAmBackToObject = JSON.parse(iAmJSONString);
	//Value from object can be extracted using these two ways
	var valueCorrespondingToKey = iAmBackToObject.iAmSimpleKey; // iAmValue
	var iAmDynamicKey = 'iAmSimpleKey';
	var valueCorrespondingToKeyDynamic = iAmBackToObject[iAmDynamicKey]; // iAmValue


};

// dataType();
// equality();
// controlFlow();
// stringManipulation();
// writingFunctions();
objectAndJSON();
// arryManipulation();
/**
 * Working with Arrays
 */
var arryManipulation = () => {
	'use strict';
	console.log('=============== ARRAY MANIPULATION ===============')

	var kindlySplitMe = 'I will show you how to split long string';
	//.split(' ').reverse().join(' ').split('').reverse().join('');
	console.log(kindlySplitMe.split(' ').reverse().join(', '));
};

/**
 * How to write functions
 */
(function() {
	'use strict';

}());

/**
 * Scopes in JavaScript
 */
(function() {
	'use strict';

}());

/**
 * Error handling
 */
(function() {
	'use strict';

}());

/**
 * strict mode
 */
(function() {
	'use strict';

}());

/**
 * scope chain
 */
(function() {
	'use strict';

}());

/**
 * IIFE - Immediately Invoked Function Expression
 */
(function() {
	'use strict';

}());

/**
 * hoisting in java script
 */
(function() {
	'use strict';

}());
