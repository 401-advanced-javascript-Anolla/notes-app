'use strict';

const mongoose = require('mongoose');
const Notes =require('./model/notes-schema');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


class Note {

  execute(note){
    if(note){
      // if (note.action && note.payload) {
      //   this.add(note);
      //   return this.save(note);
      // } 
      // else if (!(note.action) && !(note.payload)) {
      //   console.log('You should type --add or --a to add a note');
      // } 
      // else if ((note.action) && !(note.payload)) {
      //   console.log('Please add a note');
      // }
      let addRegex= /(^add$)|(^a$)/g;
      // let listRegex= /(^list$)/g;
      // let deleteRegex=/(^delete$)/g;

      if (addRegex.test(note.action)) {
        return  this.add(note);
      }
    }
  }
  // add(note){
  //   let noteObj={ id : Math.ceil(Math.random() * 1000), theNote: note.payload};
  //   console.log('Note added',noteObj.theNote);
  // }
  async save(note) {

    let newRecord = {
      text: note.payload,
      category : note.category,
    };

    const record = new Notes(newRecord);
    await record.save();
    console.log('Note Saved' , record.text);
    // return saved;
  }
}


module.exports=Note;