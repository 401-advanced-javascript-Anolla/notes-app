'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const Input = require('./lib/input');
const Note = require('./lib/notes');

let noteObject = new Input();

let note = new Note();
// note.execute(noteObject);
// noteObject.valid() ? note.execute(noteObject) :'';

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if ((noteObject.action === 'list')) {
  noteObject.valid() ? note.list(noteObject).then(mongoose.disconnect) : help();
}
else if ((noteObject.action === 'delete')) {
  noteObject.valid() ? note.delete(noteObject) : help();
}
else if ((noteObject.action === 'add' || noteObject.action === 'a')) {
  noteObject.valid() ? note.add(noteObject).then(mongoose.disconnect) : help();
}


function help() {
  console.log(`
    APP USAGE: -a <your note goes here> OR --add <your note goes here>
    `);
  process.exit();
}