'use strict';

const logs = (req, res, next) => {
  console.log('Logger hit');
  next();
};

module.exports = logs;
