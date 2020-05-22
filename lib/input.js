'use strict';

const minimist = require('minimist');

class Input {
  constructor() {
    const argv = minimist(process.argv.slice(2));
    // console.log(process.argv)
    // this.action = this.vaidateAction(Object.keys(argv)[1]);
    // this.payload = this.vaidateText(argv.add || argv.a);
    // this.category = this.vaidateText(Object.keys(argv)[2]);

    if (Object.keys(argv)[1] === 'list') {
      this.action = Object.keys(argv)[1];
      this.actionTxt = argv.list;
      // console.log(this.action,this.actionTxt)
    }

    else if (Object.keys(argv)[1] ==='delete'){
      this.action = Object.keys(argv)[1];
      this.actionTxt = argv.delete;
      // console.log(this.action,this.actionTxt)
    }
    else if (Object.keys(argv)[1] === 'add' || Object.keys(argv)[1] === 'a') {
      this.action = Object.keys(argv)[1];
      this.actionTxt = this.vaidateText(argv.add || argv.a);
      this.categoryargu=Object.keys(argv)[2];
      this.categoryTxt=this.vaidateText(argv.category);
      // console.log(this.action,this.actionTxt,this.categoryargu,this.categoryTxt)
    }



  }

  // vaidateAction(action) {
  //     const regex = /^add$|^a$/g
  //     return regex.test(action) ? action : undefined;

  // }

  vaidateText(payload) {
    return payload ? payload : undefined;
  }

  valid() {
    return this.action && this.actionTxt||this.action && this.actionTxt&&this.categoryargu&&this.categoryTxt;
  }
}



module.exports = Input;