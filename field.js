'use strict';

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.field = function (attrs) {
		var rel = attrs && attrs.dbjs;
		if (!rel || (rel._type_ !== 'relation')) {
			return input.apply(this, arguments);
		}
		return rel.toDOMInputComponent(domjs.document, attrs).dom;
	};
};
