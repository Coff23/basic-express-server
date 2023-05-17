'use strict';

module.exports = (req, res, next) => {
  const personName = req.params.name;

  if(personName && personName.trim() !== ''){
    next();
  } else {
    next('Path parameter must be a name');
  }
};