var assert = require('assert');
var Chance = require('chance');

var chance = new Chance();

describe("Simple assertion tests", function(){

	describe("Tests that will be using simple assert and assert.ok",function(){

		var bool = chance.bool();
		var randnum = chance.integer({min: 1, max: 100});
		var str = chance.string();

		console.log(str);

		it('assert on a random boolean value to be true', function(){

			assert(bool === false, "The random generated boolean was true");
		});

		it('assert on a random number to see if it is even', function(){
			
			assert((randnum % 2) === 0, "The random generated number is not even");
		});

		it("assert on a random string to be larger than 15 chars", function(){

			assert(str.length >= 15, "The string is less than 15 chars");
		});

		it("assert on the same random boolean using ok", function(){

			assert.ok(bool === true, "The random generated boolean  was false");
		});

		it("assert on the same random number to check how large it is", function(){

			assert.ok(randnum > 50, "The random number is less than 50");
		});

		it("assert on the random string to see if it is less than 10 chars", function(){

			assert.ok(str.length <= 10, "The random string is larger than 10 chars");
		});

	});




})