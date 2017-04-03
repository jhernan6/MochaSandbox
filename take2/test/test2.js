var assert = require('assert');
var Chance = require('chance');

var chance = new Chance();

describe("Simple assertion tests", function(){

	describe("Tests that will be using simple assert",function(){

		var bool = chance.bool();
		var randnum = chance.integer({min: 1, max: 100});
		var str = chance.string();

		console.log(str);

		it('assert on a random boolean value to be true', function(){

			assert(bool === false, "The random generated boolean was false");
		});

		it('assert on a random number to see if it is even', function(){
			
			assert((randnum % 2) === 0, "The random generated number is not even");
		});

		it("assert on a random string to be larger than 10 chars", function(){

			assert(str.length > 10, "The string is larger than 15 chars");
		});

	});



})