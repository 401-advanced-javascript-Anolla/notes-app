'use strict';
const minimist = require('minimist');

/**
 *  sample input would be
 *  node index.js --add "This is a really cool thing that I wanted to remember for later"
 *
 */



class Input {
  constructor() {

    const argv = minimist(process.argv.slice(2));
    // this.action = this.validateMethod(Object.keys(argv)[1]);
    // this.payload = this.validateNote(argv.add || argv.a || argv.list);
    // this.category = this.validateCategory(Object.keys(argv)[2]);

    let addAction;
    let actionTxt;
    let category;
    let categoryTxt;
    let listOrDelete;
    let listOrDeleteTxt;

    if (Object.keys(argv).length===3){
      addAction=Object.keys(argv)[1];
      actionTxt=argv[addAction];
      
      category=Object.keys(argv.length[2]);
      categoryTxt=argv[category];
    
    }
    else{
      listOrDelete=Object.keys(argv)[1];
      listOrDeleteTxt=argv[listOrDelete];
    }


    if(Object.keys(argv).length===1){
      addAction=Object.keys(argv)[0];
      actionTxt=argv[addAction];
      this.action = addAction;
      this.payload = actionTxt;
    }

    let addRegex= /(^add$)|(^a$)/g;
    let listRegex= /(^list$)/g;
    let deleteRegex=/(^delete$)/g;
    let categoryRegex= /(^category$)/g;
    
    if(addRegex.test(addAction) && categoryRegex.test(categoryTxt)){
      this.action = addAction;
      this.payload = actionTxt;
      this.category = categoryTxt;
    }

    else if(listRegex.test(listOrDelete)){
      this.action = listOrDelete;
      this.payload = listOrDeleteTxt;
    }
    else if(deleteRegex.test(listOrDelete)){
      this.action = listOrDelete;
      this.payload = listOrDeleteTxt;
    }


  }
  
  valid() {
    return this.action && this.payload;
  }

  // validateMethod(method) {
  //   const regex = /((^add$)|(^a$))/i;
  //   return regex.test(method) ? method : undefined;
  // }
  // validateNote(userNote) {
  //   return (userNote != true) ? userNote : undefined;
  // }

  // validateCategory(arg2) {
  //   const regex = /(^category$)/g;
  //   return regex.test(arg2) ? arg2 : undefined;
  // }
 
}

/**
 * method = a|add |(anything => you should type --add or -a so you can add a note)
 */

module.exports = Input;