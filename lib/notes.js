'use strict';

require('dotenv').config();
// const Schema = require('./model/notes-schema');
const collection = require('./model/notes-collection');


class Note {
  execute(note) {

    if (note) {
      if (note.action && note.actionTxt ) {
        console.log('Note added', note.actionTxt);
      }
      else if (!(note.action) && !(note.actionTxt)) {
        console.log('You should type node index.js --add <your note goes here>');
      }
      else if ((note.action) && !(note.actionTxt)&& !(note.categoryargu) && !(note.categoryTxt)) {
        console.log('You didn"t add your note . node index.js --add <your note goes here>');
      }

    }
  }
  add(note) {
    return collection.create(note);
  }

  list(note) {
    return collection.get(note);
  }

  delete(note) {
    collection.delete(note);
  }
}



module.exports = Note;