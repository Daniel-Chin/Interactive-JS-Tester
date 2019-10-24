# Interactive JS Tester
Test the functions and objects you wrote in a real-time terminal shell, analogous to `IPython.embed()`.  

## Example
Suppose this is the code you want to test: 
```js
function DogToBeTested (name) {
  this.name = name;
};

module.exports = {
  DogToBeTested, 
};
```
Simply add this to the end of the file: 
```js
if (require.main === module) {  // so the test doesn't run when your code is imported 
  const interactiveTester = require('./interactiveTester');
  interactiveTester({
    console,            // always provide `console`
    ...module.exports,  // the exported things to be tested
    dog: new DogToBeTested('Stanley'), // maybe a sample object too
  });
}
```
Then, running the file will give you an interacitve terminal interface just like Node.js, but with your functions and objects loaded.  
```
> dog
DogToBeTested { name: 'Stanley' }
> `hello, ${dog.name}`
hello, Stanley
> 
```

## Notice
* Pressing Ctrl-C ONLY ONCE will quit the script. Be careful.  
* We do not support "hot reload" yet. After you modify your script, please run your script again to see the changes.  
