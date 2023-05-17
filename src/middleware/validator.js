'use strict';

module.exports = (req, res, next) => {
  const personName = req.query.name;

  if(personName && personName.trim() !== ''){
    next();
  } else {
    next('Path parameter must be a name');
  }
};