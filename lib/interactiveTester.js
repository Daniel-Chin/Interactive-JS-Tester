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
  let clop;
  while (true) {
    op = await input('> ');
    if (op[op.length - 1] !== ';') {
      clop = `console.log(${op});`;
    } else clop = op;
    try {
      vm.runInContext(clop, context);
    } catch (_) {
      try {
        vm.runInContext(op, context);
      } catch (err) {
        console.error(err);
      }
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
