'use strict'

class Note {

    execute(note){
        if(note){
            if (note.action && note.payload) {
               this.add(note);
            } 
            else if (!(note.action) && !(note.payload)) {
            console.log('You should type --add or --a to add a note');
            } 
            else if ((note.action) && !(note.payload)) {
            console.log('Please add a note');
            }

        }
    }
    add(note){
        let noteObj={ id : Math.ceil(Math.random() * 10), theNote: note.payload}
        console.log('Note added',noteObj.theNote);
    }
}


module.exports=Note;