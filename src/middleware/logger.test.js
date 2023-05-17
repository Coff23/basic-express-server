'use strict';

const logger = require('./logger');

describe('middlware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  test('logs as expected', () => {
    logger(req, res, next);

    expect(consoleSpy).toHaveBeenCalledWith({
      Method: req.method,
      Path: req.path,
    });
  });
});