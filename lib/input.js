'use strict';
const minimist = require('minimist');

/**
 *  sample input would be
 *  node index.js --add "This is a really cool thing that I wanted to remember for later"
 *
 */
function Input() {
  const argv = minimist(process.argv.slice(2));
  console.log(argv);
  this.action = this.validateMethod(Object.keys(argv)[1]);
  this.payload = this.validateNote(argv.add||argv.a);
}
/**
 * method = a|add |(anything => you should type --add or -a so you can add a note)
 */
Input.prototype.validateMethod = function (method) {
  const regex = /(^add$)|(^a$)/i;
  return regex.test(method) ? method : undefined;
};
Input.prototype.validateNote = function (userNote) {
  return (userNote ? userNote : undefined);
};

module.exports = Input;