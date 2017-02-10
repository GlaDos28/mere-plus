/****************************
 * Function that extends prototype by the given task class.
 * Such a generalization is needed for extending Mere+ task class for other potential libraries and frameworks.
 *
 * @author GlaDos
 * @since 08.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const prevExtendPrototype = require("mere/src/extendPrototype");

/**
 * Constants.
 */
const
	superExtendPrototype = prevExtendPrototype.extendPrototype,
	getTaskModuleMap     = prevExtendPrototype.getTaskModuleMap,
	getArrayTask         = prevExtendPrototype.getArrayTask,
	TEST_HEADER          = "test! ";

/* eslint-disable no-extend-native, max-statements */

/**
 * Extends prototype by the given task class.
 * Such a generalization is needed for extending Mere task class for other potential libraries.
 *
 * @param {MereTask} TaskClass MereTask class or subclass
 * @return {void} nothing
 */
const extendPrototype = (TaskClass) => {
	superExtendPrototype(TaskClass);

	//** string prototype

	String.prototype.memoize = function () {
		return getTaskModuleMap()[this].memoize();
	};

	String.prototype.bindTest = function (func) {
		const testTaskName = TEST_HEADER + this;

		return testTaskName.bind(func);
	};

	String.prototype.__defineGetter__("testTask", function () {
		return getTaskModuleMap()[TEST_HEADER + this];
	});

	//** array prototype

	Array.prototype.memoize = function () {
		return getArrayTask(TaskClass, this, "memoize()").memoize();
	};
};

/**
 * Exports.
 */
exports = module.exports = { extendPrototype : extendPrototype };