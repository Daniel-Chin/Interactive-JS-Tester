const vm = require('vm');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const interactiveTester = async (contextObject) => {
  if (! contextObject.console) {
    throw Error('You must provide `console` in contextObject');
  }
  const context = vm.createContext(contextObject);
  let op;
  while (true) {
    op = await input('> ');
    if (op[op.length - 1] !== ';') {
      op = `console.log(${op});`;
    }
    try {
      vm.runInContext(op, context);
    } catch (err) {
      console.error(err);
    }
  }
};

const input = async (prompt) => {
  return new Promise((resolve, _) => {
    readline.question(prompt, (op) => {
      resolve(op);
    });
  });
};

module.exports = interactiveTester;
