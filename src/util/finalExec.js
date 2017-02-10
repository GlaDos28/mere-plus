/****************************
 * Function that finally executes Mere task's kept function with final arguments (without Mere tasks that must be made).
 * Uses memoization if needed.
 *
 * @author GlaDos
 * @since 08.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const finalExecCnt = require("mere/src/util/finalExec");

/**
 * Finally executes Mere task's kept function with final arguments (without Mere tasks that must be made).
 * Uses memoization if needed.
 *
 * @param {MereTask} task to be executed. Must be a real Mere task, not its relative string or etc.
 * @param {Array<Object|TransArg>} args final argument array
 * @param {ArgNum} argNum argument number in special class form
 * @param {Number} argLimit argument limit
 * @return {Object|Promise} execution result
 */
const finalExec = (task, args, argNum, argLimit) => {
	if (!argNum.hasRest) { /* memoization does not work with a 'rest' parameter */
		for (let i = argLimit; i < argNum.num; i += 1)
			args.push(undefined);

		if (task.memo !== null) {
			const argsKey = JSON.stringify(args); /* => memoization works with serializable arguments only */

			if (task.memo[argsKey] !== undefined)
				return task.memo[argsKey];

			const res = task.func(...args);

			task.memo[argsKey] = res;
			return res;
		}
	}

	return task.func(...args);
};

finalExecCnt.finalExec = finalExec;

/**
 * Exports.
 */
exports = module.exports = {};