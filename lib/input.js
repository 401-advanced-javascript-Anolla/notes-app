'use strict';
const minimist = require('minimist');

/**
 *  sample input would be
 *  node index.js --add "This is a really cool thing that I wanted to remember for later"
 *
 */
class Input{
  constructor(){
    const argv = minimist(process.argv.slice(2));
    this.action = this.validateMethod(Object.keys(argv)[1]);
    this.payload = this.validateNote(argv.add||argv.a);
  }
  validateMethod (method) {
    const regex = /(^add$)|(^a$)/i;
    return regex.test(method) ? method : undefined;
  };
  validateNote (userNote) {
    return (userNote !== true ? userNote : undefined);
  };
  valid() {
    return this.action && this.payload;
  }
}
/**
 * method = a|add |(anything => you should type --add or -a so you can add a note)
 */

module.exports = Input;