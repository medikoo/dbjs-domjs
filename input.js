'use strict';

module.exports = function (domjs) {
	var input = domjs.ns.input;

	domjs.ns.input = function (attrs) {
		var rel = attrs && attrs.dbjs;
		if (!rel || (rel._type_ !== 'relation')) {
			return input.apply(this, arguments);
		}
		return rel.toDOMInput(domjs.document, attrs).dom;
	};
};
