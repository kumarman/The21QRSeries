# Difference Between Double And Triple Equality? {#chapter3 .chapter}

There are three types of equality.  

Let us define some variables and use various comparison methods.
```js
var plusZero = 0; //+ve sign 
var minusZero = - 0; // zero with -ve sign
var blank = ' '; //A blank space string
```

Abstract equality or double equal
```js
console.log(plusZero == minusZero); // true
console.log(plusZero == blank); //prints true
console.log(NaN == NaN); // prints false
```

Strict equality comparison or tripple equal
```js
console.log(plusZero === minusZero); // true
console.log(plusZero === blank); // prints true
console.log(NaN === NaN); // prints false
```

SameValue comparison: It is similar to tripple equal except for +0, -0 and NaN.
```js
console.log(Object.is(plusZero, minusZero)); //false
console.log(Object.is(NaN, NaN)); //true
console.log(Object.is(plusZero, blank)); //false
```

1. **Double Equality or Abstract Equality Comparison or Loose Equality**:  
	 It compares two values by converting them to a common type. We should always use tripple equality.
2. **Strict Equality Comparison or Tripple Equality**:  
   It compares type and value both. If either type or value is different, false is returned.
3. **Same-value Equality**:  
	 It is similar to Strict equality except for +0, -0 and NaN.
		