/****************************
 * Mere+ task definition. Is an extension of a Mere task.
 *
 * @author GlaDos
 * @since 07.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const
	MereTask = require("mere/src/MereTask"),
	wrapFunc = require("./util/wrapFunc");

/**
 * The Mere+ task implementation.
 */
class MereTaskPlus extends MereTask {
	constructor (func, formalArgs) {
		super(func, formalArgs);
		super.func = wrapFunc(this, func);

		this.memo       = null; /* null means no memo (by default) */
		this.callNumber = 0;
	}

	memoize () {
		if (this.memo === null)
			this.memo = {};
	}

	//** statistic

	getCallNumber () {
		return this.callNumber;
	}
}

/**
 * Exports.
 */
exports = module.exports = MereTaskPlus;