'use strict';

require('dotenv').config();
const Input = require('./lib/input');

const Note=require('./lib/notes');


let NoteObj=new Input();

let createNote=new Note();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
createNote.execute(NoteObj);

// NoteObj.valid() ? createNote.execute(NoteObj).then(mongoose.disconnect) : help();



// function help() {
//   console.log(`
//     APP USAGE: -a <your note goes here> OR --add <your note goes here>
//     `);
//   process.exit();
// }