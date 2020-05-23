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
  console.log('Please provide an id of the note you want to delete');
  noteObject.valid() ? note.delete(noteObject) : help();
}
else if ((noteObject.action === 'add' || noteObject.action === 'a')) {
  noteObject.valid() ? note.add(noteObject).then(mongoose.disconnect) : help();
}
else{
  help();
}


function help() {
  console.log(`APP USAGE:
  
    * TO ADD A NOTE
    node index.js -a <your note goes here> --category <choose a category>
    OR
    node index.js --add <your note goes here> --category <choose a category>

    * TO RETRIEVE ALL YOUR NOTES YOU ADDED
    node index.js --list OR node index.js <the category of the note>
    
    * TO DELETE A NOTE
    
    node index.js --delete <the id of the note>`);
  process.exit();
}