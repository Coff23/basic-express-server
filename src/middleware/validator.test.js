'use strict';

const validator = require('./validator');

describe('Validator middleware', () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  test('throws an error as expected', () => {
    req = { query: { person: 'name'} };
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Path parameter must be a name');
  });

  test('runs successfully', () => {
    req = { query: { person: 'name' } };
    validator(req, res, next);

    expect(next).toHaveBeenCalledWith('Path parameter must be a name');
  });

});