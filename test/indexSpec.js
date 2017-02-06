/****************************
 * index.js tests.
 *
 * @author GlaDos
 * @since 06.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const merePlus = require("../index.js");

describe("TODO", () => {
	beforeEach((done) => {
		merePlus.config.setArgCheck(merePlus.MUST_EQUAL);
		merePlus.config.setMakeReturnPromiseAllowed(false);
		done();
	});

	afterEach((done) => {
		merePlus.clearTasks();
		done();
	});

	it("TODO", () => {

	});
});

/**
 * Exports.
 */
exports = module.exports = {};