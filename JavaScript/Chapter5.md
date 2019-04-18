# How to manipulate strings? {#chapter5 .chapter}

Adding multiple strings
```js
var addedString = 'Add Mehak, ' + 'Aayan too.';
//addedString = 'Add Mehak, Aayan too.'
```

Getting length of string
```js
var lengthOfStr = addedString.length;//21
```

Getting index of a partial string. Index is counted starting with 0.
```js
var indexFirst = addedString.indexOf('a'); //7
var indexLast = addedString.lastIndexOf('a');//11
```

Finding position using RegExp
```js
// i means case insensitive
var indexPositionSearch 
			= addedString.search(/(mehak|aayan)/i);//4
```
Replacing string using RegExp
```js
var replaceFirst = 
		addedString.replace(/(mehak|aayan)/i, 'Kid');
// replaceFirst = 'Add Kid, Aayan too.'
var replaceAll = 
		addedString.replace(/(mehak|aayan)/ig, 'Kid');
// replaceAll = 'Add Kid, Kid too.'
```
Substring  

```js
//substring fromIndex to toIndex
//substring does not take -ve argument
var substrFromM2Nindex 
			= addedString.substring(4, 9);//Mehak

//substr and slice can take -ve argument
//-ve argument means counting from end
var substrFromIndex = addedString.substr(-4);
// substrFromIndex = 'too.'
//substr fromIndex to toLength			
var substrFromM2Length = addedString.substr(4, 5);
//substrFromM2Length = 'Mehak'

//Slicing string from fromIndex to toIndex
var sliceFromM2N = addedString.slice(4, 9);//Mehak
var oneMoreEx = addedString.slice(-10, -5);//Aayan

```
