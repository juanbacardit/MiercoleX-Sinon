"use strict";

var _ = require("underscore.string");

var HW = (function () {
	
	//private members
	var byeMessage = "Bye, %s"
	var helloMessage = "Hello, %s"

	var putSomeExclamations = function (message) {
		return _.sprintf("%s!!!", message);
	};
	
	//public members
	var constructor = function () {
		this.SayHello = function (name) {
			return putSomeExclamations(_.sprintf(helloMessage, name));
		};
		this.SayGoodBye = function (name) {
			return _.sprintf(byeMessage, name);
		};
	};
	return constructor;
})();

module.exports = HW;