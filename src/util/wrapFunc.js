/****************************
 * Function that wraps every task function for saving it into Mere+ class.
 *
 * @author GlaDos
 * @since 08.02.17
 ****************************/

"use strict";

/**
 * Wraps every task function for saving it into Mere+ class.
 *
 * @param {MerePlusTask} task Mere+ task which is related to the given function
 * @param {Function} func function to wrap
 * @return {Function} wrapped function
 */
exports = module.exports = (task, func) => (...args) => {
	task.callNumber += 1;

	return func(...args);
};