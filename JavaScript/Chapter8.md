# How to work with an array?

Declaring an array
```js
var anArray = [23, 'abc', 
        { a: 123, b: 'qwert'},
        function(){return 'abcd'}
        ];
```
Finding length of an array. Getting and replacing object at an index. Index starts with 0. 
```js
//Getting the value
var element = anArray[3];
//item and index 3 is a function
var result = element(); // result = 'abcd'
//Changing the value
anArray[0] = 32;
var currentLength = anArray.length; //4 
```
Dynamically adding/removing elements from end of array
```js
var drinks = [];
//ADD or REMOVE from end of array
var lengthAfterAdd = drinks.push('Brandy');
//lengthAfterAdd = 1
lengthAfterAdd = drinks.push('Rum');
//Now lengthAfterAdd = 2
var removedElement = drinks.pop();
//removedElement = 'Rum'; drinks = ['Brandy']
```
Dynamically adding/removing elements from beginning of array
```js
var names = ['John', 'Michel'];
var lengthNew = names.unshift('Ramesh');
//lengthNew = 3 and names = ['Ramesh', 'John', 'Michel'];
var nameFirst = names.shift();
//firstName = 'Ramesh' and names = ['John', 'Michel']
```
Adding multiple elements at the end of array
```js
var names = ['John', 'Michel'];
var concatArray = names.concat('Rakesh', 'Mahesh');
//[ 'John', 'Michel', 'Rakesh', 'Mahesh' ]
```
Using split, join and reverse
```js
var kindlySplitMe = 'How to split long string';
var splitReverseAndJoin
  = kindlySplitMe.split(' ').reverse().join(', ');
// string, long, split, to, How
```
Making a copy of an array
```js
var drinks = ['Rum', 'Martini', 'Malibu'];
var copyDrinks = drinks.slice(); //a new copy
//Does not change the original array
//Copy from startIndex to endIndex
var partialCopy = drinks.slice(1, 3);
// partialCopy = [ 'Martini', 'Malibu' ]
```
Deleting elements from an array
```js
var alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
//delete 3 elements starting with index 1
//B, C, D to be deleted
var deletedAlphabets = alphabets.splice(1, 3);
// deletedAlphabets = [ 'B', 'C', 'D' ]
// alphabets = [ 'A', 'E', 'F' ]
```