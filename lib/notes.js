function Note() {}

Note.prototype.execute=function(note){
    if (note.action && note.payload) {
        Note.prototype.add(note);
    } 
    else if (!(note.action) && !(note.payload)) {
    console.log('Please add a valid action and a note');
    } 
    else if (!(note.action) && (note.payload)) {
    console.log('You should type --add or --a to add a note');
    } 
    else if ((note.action) && !(note.payload)) {
    console.log('Please add a note');
    }
}

Note.prototype.add=function(note){

    let noteObj={ id : Math.ceil(Math.random() * 10), theNote: note.payload}
    console.log('Note added',noteObj.theNote);
    
}

module.exports=Note;