'use strict';

require('dotenv').config();
// const Schema = require('./model/notes-schema');
const collection=require('./model/notes-collection');


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
        console.log('You didn"t add your note. You should type --add or --a to add a note' );
      }

    }
  }
  async add(note) {
    return collection.create(note);
  }

  async list(note) {
    return collection.get(note);
  }

  delete(note) {
    collection.delete(note);
  }
}



module.exports = Note;