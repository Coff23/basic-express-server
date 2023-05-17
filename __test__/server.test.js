'use strict';

const { app } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('Server', () => {
  test('handles the root path', async () => {
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

  test('Handles not found', async () => {
    let response = await mockRequest.get('/bla');
    expect(response.status).toEqual(404);

    response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  });

  test('Handle name string', async () => {
    let response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);

  });

});