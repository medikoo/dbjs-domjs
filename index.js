'use strict';

var field = require('./field')
  , input = require('./input');

module.exports = function (domjs) {
	field(domjs);
	input(domjs);
};
