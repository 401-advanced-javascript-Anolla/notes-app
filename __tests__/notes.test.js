'use strict'

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Note Module', () => {
  it('Nothing is logged to the console if there was no command given', () => {
    const note = new Note();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });
  it('If the command (add) and data (the note) were both valid', () => {
    const note = new Note();
    note.execute({ action: 'a', payload: 'User"s Note' });
    expect(console.log).toHaveBeenCalled();
  });
});