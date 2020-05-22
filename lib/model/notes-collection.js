'use strict';

const notesModel = require('./notes-schema');

class Collection {

  //   constructor(){} // no need for it but it's the convention
  async get(note) {
    if (note.actionTxt !== true) {
      const noteSaved = await notesModel.find({ category: note.actionTxt });
      for (let i = 0; i < noteSaved.length; i++) {
        console.log(
          `          ${noteSaved[i].text}
            Category: ${noteSaved[i].category}    ID: ${noteSaved[i]._id}
            ---------------------------------------------------------`);
      }
      return noteSaved;
    }
    else {
      const noteSaved = await notesModel.find({});
      for (let i = 0; i < noteSaved.length; i++) {
        console.log(
          `          ${noteSaved[i].text}
            Category: ${noteSaved[i].category}    ID: ${noteSaved[i]._id}
            ---------------------------------------------------------`);
      }
      return noteSaved;
    }
  }

  async create(note) {
    let newRecord = new notesModel({
      text: note.actionTxt,
      category: note.categoryTxt,
    });
    const savedRecord = await newRecord.save();
    console.log('Note Saved', newRecord.text);
    return savedRecord;
  }

  delete(note) {
    notesModel.findByIdAndDelete(note.actionTxt, () => {
      console.log(`Deleted note ${note.actionTxt}`);
      process.exit();
    });
  }

}
module.exports = new Collection();