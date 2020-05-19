'use strict';

const minimist = require('minimist');
const Input = require('../lib/input');

jest.mock('minimist');
minimist.mockImplementation(() => {
  return {
    a: 'My note'};
});

describe('valid()', () => {
  it('Given an invalid input', () => {
    const newInstance = new Input();
    newInstance.action = undefined;
    newInstance.payload = undefined;
    expect(newInstance.valid()).toBeFalsy();
  });
  it('Given a valid input', () => {
    const newInstance = new Input();
    newInstance.payload = 'My note';
    newInstance.action = 'add' || 'a';
    expect(newInstance.valid()).toBeTruthy();
  });
});