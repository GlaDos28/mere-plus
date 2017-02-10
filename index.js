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
const
	mere            = require("mere"),
	MerePlusTask    = require("./src/MerePlusTask"),
	extendPrototype = require("./src/extendPrototype"),
	config          = require("./src/configuration");

extendPrototype.extendPrototype(MerePlusTask);

/**
 * Exports.
 */
exports = module.exports = {
	NO_CHECK   : mere.NO_CHECK,
	NOT_MORE   : mere.NOT_MORE,
	NOT_LESS   : mere.NOT_LESS,
	MUST_EQUAL : mere.MUST_EQUAL,
	DEFAULT    : config.DEFAULT,
	config     : config.config,
	clearTasks : mere.clearTasks
};

"sum".bind((n1, n2) => n1 + n2);

"sum".bindTest(() => {
	let curRes = "sum".make(2, 3);

	if (curRes !== 5)
		throw new Error(`2 + 3 is 5, not ${curRes}`);

	curRes = "sum".make(1000, -1000);

	if (curRes !== 0)
		throw new Error(`1000 + (-1000) is 0, not ${curRes}`);

	return -1;
});

"".bind(() => {});

["sum".testTask.promiseTask, "sum".testTask].promise().then(() => { console.log("HAHA"); });

"sum".testTask.make();