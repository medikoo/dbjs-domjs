'use strict';

var types = require('es5-ext/object/primitive-set')('namespace', 'prototype',
	'object', 'relation');

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.input = function (attrs) {
		var rel = attrs && attrs.dbjs;
		if (!rel || !types[rel._type_]) {
			return input.apply(this, arguments);
		}
		return rel.toDOMInput(domjs.document, attrs).dom;
	};
};
