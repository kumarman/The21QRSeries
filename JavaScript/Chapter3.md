# Difference Between Double And Triple Equality? {#chapter3 .chapter}

There are three types of equality.

```js
var plusZero = 0; //+ve sign 
var minusZero = - 0; // zero with -ve sign
var blank = ' '; //A blank space string

//Abstract equality or double equal
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
```

1. Double Equality or Abstract Equality Comparison or Loose Equality:  
	 It compares two values by converting them to a common type.  
2. Strict Equality Comparison or Tripple Equality:  
   It compares type and value both. If either type or value is different, false is returned.
3. Same-value Equality:  
	 It is similar to Strict equality except for +0, -0 and NaN.
		