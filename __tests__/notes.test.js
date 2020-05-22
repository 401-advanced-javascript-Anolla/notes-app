'use strict';

require('@code-fellows/supergoose');
const Note = require('../lib/notes.js');
const NotesCollection = require('../lib/model/notes-collection');

const minimist = require('minimist');

jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    text: 'someone',
    category:'person',
  };
});

jest.spyOn(global.console, 'log');

describe('Note Module', () => {

  it('Nothing is logged to the console if there was no command given', () => {
    const note = new Note();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('If the command (add) and data (the note) were both valid', () => {
    const note = new Note();
    note.execute({ action: 'a', actionTxt: 'User"s Note'});
    expect(console.log).toHaveBeenCalled();
  });

  it('create() function creates a new note', () => {
    const newNote = {actionTxt: 'living',categoryTxt: 'life'};
    return NotesCollection.create(newNote).then((record) => {
      Object.keys(newNote).forEach((key) => {
        expect(record.text).toEqual(newNote.actionTxt);
      });
    });
  });
  
  it('get() => will find an object with spacific category', () => {
    let newNote = {action: 'living',actionTxt: 'life'};
    return NotesCollection.get(newNote).then(record=>{
      return NotesCollection.get({actionTxt:record.category}).then(item=>{
        Object.keys(item).forEach(()=>{
          expect(newNote.actionTxt).toEqual(item.category);
        });
      });
    });
  });
});

