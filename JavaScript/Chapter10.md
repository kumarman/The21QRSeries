# What is strict mode?

Strict mode in JS means strict operating context. It can be enabled by putting 'use strict' at the top of the file or at the top of a function.
```js
'use strict';
//other functions and variables

//To enable only for a particular function
function(param){
  'use strict';
  //Now only this function is in strict mode
}
```
Strict mode has the following effect on the code execution:

1. Variable can not be used without declaration.
```js
(() => {
  'use strict';
  undeclaraedVar = 'someValue'; //Not allowed
  //undeclaraedVar is not defined
}());
```

2. Not possible to use reserved keywords as variable names. e.g. `let`, `const`, `var` etc.
```js
(() => {
  'use strict';
  var eval = 'someValie'; //Not allowed
  //Unexpected strict mode reserved word
}());
```
3. `delete` of `var`, `function` and `function` arguments is not allowed.
```js
(() => {
  'use strict';
  var toBeDeleted = 'TryDeletingMe';
  var aFunction = () => 'JustString';
  delete toBeDeleted; // Not allowed
  delete aFunction; // Not allowed
  //Delete of an unqualified identifier in strict mode.
  
}());
```
4. variables defined inside `eval` are not available outside of the `eval`.
```js
(() => {
  'use strict';
  eval('var varInEval = 12;');
  console.log(varInEval);
  //Error: varInEval is not defined
  //In non-strict mode it would have printed 12
}());
```
5. The default value of `this` is undefined however in non-strict mode it is window object.
```js
(() => {
  'use strict';
  console.log(this); //prints indefined
  //In non-strict mode it prints global window object
}());
```
6. Duplicating parameter in a function is not allowed
```js
(() => {
  'use strict';
  //Not allowed
  function withDuplicateParamName(param, param) {
    console.log(param);
  }
  //Duplicate parameter name not allowed in this context
}());
```

It is always recommended to use strict mode.