'use strict';

var isObservableValue = require('observable-value/is-observable-value');

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.field = function (attrs) {
		var observable = attrs && attrs.dbjs;
		if (!observable || !isObservableValue(observable)) {
			return input.apply(this, arguments);
		}
		return observable.toDOMInputComponent(domjs.document, attrs).dom;
	};
};
