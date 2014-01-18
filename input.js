'use strict';

var isObservableValue = require('observable-value/is-observable-value')
  , isDbjsType        = require('dbjs/is-dbjs-type');

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.input = function (attrs) {
		if (attrs && (attrs.dbjs != null)) {
			if (!isObservableValue(attrs.dbjs) && !isDbjsType(attrs.dbjs)) {
				throw new TypeError(attrs.dbjs + " is not dbjs observable or type");
			}
			return attrs.dbjs.toDOMInput(domjs.document, attrs).dom;
		}
		return input.apply(this, arguments);
	};
};
