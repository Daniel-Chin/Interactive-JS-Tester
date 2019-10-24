const functionToBeTested = (x, y) => (x + y);

function DogToBeTested (name) {
  this.name = name;
};

module.exports = {
  functionToBeTested, 
  DogToBeTested, 
};

if (require.main === module) {
  const interactiveTester = require('./interactiveTester');
  console.log('Try typing "dog"');
  interactiveTester({
    console, 
    ...module.exports, 
    dog: new DogToBeTested('Stanley'), 
  });
}
