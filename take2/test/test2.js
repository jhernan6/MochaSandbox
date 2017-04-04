var assert = require('assert');
var Chance = require('chance');

var chance = new Chance();


//This is a helper function that we will use for testing
function alwaysEven(num1, num2){

	var total = num1 + num2;

	if (total % 2 == 0){
		return total;
	}
	else
	{
		return total+1;
	}
}

//This is the beginning of the whole test suite
describe("Simple assertion tests", function(){

	//First try at creating tests
	describe("Tests that will be using simple assert and assert.ok",function(){

		var bool1 = false;
		var bool2 = true;
		var randnum = chance.integer({min: 1, max: 100});
		var str = chance.string();

		it('assert that the first bool is false', function(){

			assert(bool1 === false, "This bool should be false");
		});

		it('assert tha the second bool is true', function(){
			
			assert(bool2 === true, "This bool should be true");
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

	//Second attempt creating test for a help function
	describe("Simple assert equal tests for our alwaysEven helper function", function(){

		it('assert on two odd numbers', function(){

			assert.equal(alwaysEven(1,3)%2, 0, "The result of adding two odd numbers should be even" );
		});

		it('assert on two even  numbers', function(){
			assert.equal(alwaysEven(2,4)%2, 0, "The result of adding two even numbers should be even");
		})

		it('assert on adding an odd and even number', function(){
			assert.equal(alwaysEven(1,2)%2, 0, "The function should turn the result to an even number");
		})

		it('assert on adding two random natural numbers', function(){
			assert.equal(alwaysEven(chance.natural(),chance.natural())%2, 0, "The function should made the addion of the randum number even");
		})

	});


})