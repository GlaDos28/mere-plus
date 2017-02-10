/****************************
 * Mere+ configuration. Is an extension of a Mere configuration. Is a singleton object.
 *
 * @author GlaDos
 * @since 08.02.17
 ****************************/

"use strict";

/**
 * Imports.
 */
const prevConfiguration = require("mere/src/configuration");

/**
 * Constants.
 */
const
	MereConfiguration = prevConfiguration.MereConfiguration,
	prevConfig        = prevConfiguration.config;

/**
 * Default parameters.
 */
const DEFAULT = {};

/**
 * Mere+ configuration definition.
 */
class MerePlusConfiguration extends MereConfiguration {
	constructor (argCheck, makeReturnPromiseAllowed) {
		super(argCheck, makeReturnPromiseAllowed);

		/* TODO */
	}

	/* TODO */
}

/**
 * The configuration itself. Is a singleton object.
 *
 * @type {MereConfiguration}
 */
const config = new MerePlusConfiguration(prevConfig.getArgCheck(), prevConfig.isMakeReturnPromiseAllowed());

/**
 * Exports.
 */
exports = module.exports = {
	DEFAULT               : DEFAULT,
	MerePlusConfiguration : MerePlusConfiguration,
	config                : config
};