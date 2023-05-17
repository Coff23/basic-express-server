'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  it('handles the root path', async () => {
    const response = await mockRequest.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy;
    expect(response.text).toEqual('proof of life');
  });

  test('handle person route', async () => {
    const response = await mockRequest.get('/person?name=josh');

    expect(response.status).toEqual(200);
    expect(response.text).toEqual(`Hello, josh`);
  });

});