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
		var str = chance.string({length: 20});

		it('assert that the first bool is false', function(){

			assert(bool1 === false, "This bool should be false");
		});

		it('assert tha the second bool is true', function(){
			
			assert(bool2 === true, "This bool should be true");
		});

		it("assert on a random number to verify it is larger than 0", function(){

			assert(randnum > 0, "The number cannot be less than 1");
		});

		it("assert on a random number to verify it is less than 101", function(){

			assert(randnum < 101, "The number cannot be more than 100");
		});

		it("assert on the length of the randum string", function(){

			assert(str.length === 20, "The string can only be 20 chars long");
		});

		it("assert on the same first bool using ok", function(){

			assert.ok(bool1	=== false, "This bool should be false");
		});

		it('assert on the same second bool using ok', function(){

			assert.ok(bool2 === true, "this bool should be true");
		});

		it("assert on the same random number to check it is larger than 0", function(){

			assert.ok(randnum > 0, "The number cannot be less than 1");
		});

		it('assert on the same random number to check it is less than 101', function(){

			assert.ok(randnum < 101, "The number cannot be larger than 100");
		});

		it("assert on the length of the same random string", function(){

			assert.ok(str.length === 20, "The random string can only be 20 chars long");
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

	//Created the same test above but using the not equal assertion
	describe("Simple assert not equal test for our alwaysEven helper function", function(){
		
		it('assert not equal on two odd numbers', function(){

			assert.notEqual(alwaysEven(1,3)%2, 1, "The result of adding two odd numbers should be even");
		});

		it('assert not equal on two even numbers', function(){

			assert.notEqual(alwaysEven(2,4)%2, 1, "The result of adding two even numbers should be even");
		});

		it('assert not equal on an odd and even number', function(){

		});

		it('assert not equal on two random numbers', function(){

		});
	});


})