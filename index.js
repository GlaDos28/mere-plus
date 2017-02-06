/****************************
 * Launcher module.
 *
 * @author GlaDos
 * @since 06.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const mere = require("mere");

/* TODO some logic */

/**
 * Exports.
 */
exports = module.exports = {
	NO_CHECK   : mere.config.ARG_CHECK_ENUM.NO_CHECK,
	NOT_MORE   : mere.config.ARG_CHECK_ENUM.NOT_MORE,
	NOT_LESS   : mere.config.ARG_CHECK_ENUM.NOT_LESS,
	MUST_EQUAL : mere.config.ARG_CHECK_ENUM.MUST_EQUAL,
	DEFAULT    : mere.config.DEFAULT,
	config     : mere.config.config,
	clearTasks : mere.clearTasks
};