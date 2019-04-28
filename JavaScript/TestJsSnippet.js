var iterateMe = [3, 4, 5];
iterateMe.somekey = 7;

for (let key in iterateMe){
  console.log(key);
}

for (let value of iterateMe){
  console.log(value);
}

var iAmJSON = { 
  simpleKey: 'iAmValue', 
  listKey: ['var1', 'var2'] 
};

for (let key in iAmJSON){
  console.log(iAmJSON[key]);
}