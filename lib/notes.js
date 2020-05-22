function Note() {}

Note.prototype.execute=function(note){
  if (note.action && note.payload) {
    Note.prototype.add(note);
  } 
  else if (!(note.action) && !(note.payload)) {
    console.log('You should type --add or --a to add a note');
  } 
  else if (!(note.action) && (note.payload)) {
    console.log('You should type --add or --a to add a note');
  } 
  else if ((note.action) && !(note.payload)) {
    console.log('Please add a note. You should type --add or --a to add a note');
  }
};

Note.prototype.add=function(note){

  let noteObj={ id : Math.ceil(Math.random() * 1000), theNote: note.payload};
  console.log('Note added','(id:',noteObj.id,'Note:',noteObj.theNote,')');
    
};

module.exports=Note;