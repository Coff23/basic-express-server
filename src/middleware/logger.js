'use strict';

const logs = (req, res, next) => {
  console.log({
    Method: req.method,
    Path: req.path,
  });
  next();
};

module.exports = logs;
