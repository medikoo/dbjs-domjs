'use strict';

var d = require('es5-ext/lib/Object/descriptor')
  , defineProperty = Object.defineProperty;

module.exports = function (domjs) {
	var proto = domjs._elementProto('input')
	  , construct = proto._construct;

	defineProperty(proto, '_construct', d(function (attrs) {
		var rel = attrs && attrs.dbjs;
		if (!rel || (rel._type_ !== 'relation')) {
			return construct.apply(this, arguments);
		}
		return rel.toDOMInput(domjs.document, attrs);
	}));
};
