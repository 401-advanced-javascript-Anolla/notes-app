'use strict';

const Input = require('./lib/input');

const Note=require('./lib/notes');

let NoteObj=new Input();

let createNote=new Note();
// createNote.execute(NoteObj)

NoteObj.valid() ? createNote.execute(NoteObj) : help();

function help() {
  console.log(`
    APP USAGE: -a <your note goes here> OR --add <your note goes here>
    `);
  process.exit();
}