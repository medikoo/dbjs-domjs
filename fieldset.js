'use strict';

var Fieldset = require('dbjs-dom/input/utils/fieldset').Fieldset

  , isArray = Array.isArray;

module.exports = function (domjs) {
	var fieldset = domjs.ns.fieldset, normalize = domjs.ns.normalize;

	return (domjs.ns.fieldset = function (attrs) {
		var obj = attrs && attrs.dbjs;
		if (!obj) return fieldset.apply(this, arguments);
		if (isArray(obj)) {
			delete attrs.dbjs;
			return normalize((new Fieldset(domjs.document, obj, attrs)).dom);
		}
		if (!obj.toDOMFieldset) return fieldset.apply(this, arguments);
		return normalize(obj.toDOMFieldset(domjs.document, attrs).dom);
	});
};
