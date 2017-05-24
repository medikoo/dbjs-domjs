'use strict';

var aFrom            = require('es5-ext/array/from')
  , objForEach       = require('es5-ext/object/for-each')
  , normalizeOptions = require('es5-ext/object/normalize-options')
  , ensureObject     = require('es5-ext/object/valid-object')
  , resolveTextChild = require('dom-ext/element/#/resolve-text-child');

var forEach = Array.prototype.forEach;

module.exports = function (domjs) {
	var form = domjs.ns.form;

	return (domjs.ns.form = function (attrs, content) {
		var element, viewContext, args = arguments;
		if (attrs && attrs.viewContext) {
			args = aFrom(args);
			attrs = args[0] = normalizeOptions(attrs);
			viewContext = attrs.viewContext;
			delete attrs.viewContext;
		}
		element = form.apply(this, args);
		if (viewContext) element.viewContext = viewContext;
		element.showErrors = function (errors) {
			objForEach(ensureObject(errors), function (message, name) {
				var messageContainer =
					element.querySelector('span.error-message[data-name=' + JSON.stringify(name) + ']');
				if (!messageContainer) {
					console.error("Could not find error container for field: " + JSON.stringify(name) +
						"\n\terror message: " + message);
					return;
				}
				resolveTextChild.call(messageContainer).data = message;
			});
		};
		element.addEventListener("reset", function () {
			forEach.call(element.querySelectorAll('span.error-message[data-name]'), function (el) {
				resolveTextChild.call(el).data = "";
			});
		}, false);
		return element;
	});
};
