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
const
	merePlus = require("../index.js"),
	expect   = require("chai").expect;

describe("Running", () => {
	beforeEach((done) => {
		merePlus.config.setArgCheck(merePlus.MUST_EQUAL);
		merePlus.config.setMakeReturnPromiseAllowed(false);
		done();
	});

	afterEach((done) => {
		merePlus.clearTasks();
		done();
	});

	describe("example", () => {
		it("'Fibonacci with memoization' was without any problems", (done) => {
			"fib".bind((k) => {
				if (!k || k instanceof Number || k < 0)
					throw new Error("bad input");

				if (k <= 2)
					return 1;

				return "fib".make(k - 1) + "fib".make(k - 2);
			});

			"fib".memoize();
			"fib".memoize();

			expect("fib".make(1)).to.equal(1);
			expect("fib".make(50)).to.equal(12586269025);

			"fib".promise(0)
				.then(
					() => {
						done("incorrect behavior");
					},
					() => "fib".promise("qwerty"))
				.then(
					() => {
						done("incorrect behavior");
					},
					() => {
						done();
					});
		});
	});
});

/**
 * Exports.
 */
exports = module.exports = {};