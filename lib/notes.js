'use strict';

require('dotenv').config();
const Schema = require('./model/notes-schema');


class Note {
  execute(note) {

    if(note){
      if (note.action && note.payload) {
        console.log('Note added',note.payload);
      } 
      else if (!(note.action) && !(note.payload)) {
        console.log('You should type --add or --a to add a note');
      } 
      else if ((note.action) && !(note.payload)) {
        console.log('Please add a note');
      }

    }
  }
  async add(note) {
    // let obj = { id: Math.ceil(Math.random() * 1000), text: note.payload }
    // console.log('Note added', obj.text);
    let newRecord = {
      text: note.actionTxt,
      category: note.categoryTxt,
    };

    const record = new Schema(newRecord);
    const saved = await record.save();
    newRecord.id = saved.id;
    console.log('Note Saved', record.text);
    return saved;
  }

  async list(note) {
    if (note.actionTxt !== true) {
      const noteSaved = await Schema.find({ category: note.actionTxt });
      for (let i = 0; i < noteSaved.length; i++) {
        console.log(
          `          ${noteSaved[i].text}
              Category: ${noteSaved[i].category}    ID: ${noteSaved[i]._id}
              ---------------------------------------------------------`);
      }
      return noteSaved;
    } else {
      const noteSaved = await Schema.find({});
      for (let i = 0; i < noteSaved.length; i++) {
        console.log(
          `          ${noteSaved[i].text}
              Category: ${noteSaved[i].category}    ID: ${noteSaved[i]._id}
              ---------------------------------------------------------`);
      }
      return noteSaved;
    }
  }
  delete(note) {
    Schema.findByIdAndDelete(note.actionTxt, () => {
      console.log(`Deleted note ${note.actionTxt}`);
      process.exit();
    });
  }


}



module.exports = Note;