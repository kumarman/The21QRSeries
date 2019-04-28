# How to create(imitate) a class?

Creating a class using function constructor. This is a conventional approach used in JavaScript to imitate classes without using class keyword. Older version of JS was not having class keyword.
```js
let Person = (function(){
  function Person(name, title = 'Mr.') {
    //defining properties
    this.name = name;
    this.title = title;
  }
  //defining functions
  Person.prototype.greet = function() {
    console.log(`Hello ${this.title} ${this.name}`);
  };
  return Person;
}());

let manoj = new Person('Manoj');
manoj.greet();
```
Creating a class using class keyword.
```js
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
```