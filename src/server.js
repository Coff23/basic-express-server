'use strict';

const cors = require('cors');
const express = require('express');
const logs = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handler/404');
const errorHandler = require('./error-handler/500');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logs);

app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.get('/person', validator, (req, res, next) => {
  res.status(200).send(`Hello, ${req.query.name}`);
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen(port, () => console.log('listening on port: ', port));

module.exports = { start, app };
