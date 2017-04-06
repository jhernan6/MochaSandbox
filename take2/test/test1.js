var assert = require('assert');


//First example that is shown in the Getting Started section

describe("Testfile #1. Simple Array test", function() {

	describe("#indexOf()", function() {

		//Simple test to verify that there is no value in the index
		it("should return -1 when out of index bound", function(){

			assert.equal(-1, [1,2,3].indexOf(4));

		});
	});
});