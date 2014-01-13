'use strict';

var validObservableValue = require('observable-value/valid-observable-value');

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.input = function (attrs) {
		if (attrs && (attrs.dbjs != null)) {
			return validObservableValue(attrs.dbjs)
				.toDOMInput(domjs.document, attrs).dom;
		}
		return input.apply(this, arguments);
	};
};
