var assert = require('assert');

describe("Testfile #4. All the test below will be using strict equal", function(){

	var numbah = 9;
	var bool = false;
	var oneChar = "j";
	var oneString = "mocha";

	describe('Going to be running multiple test inside multiple describes',function(){

		describe("Simple strict equal on numbers", function(){

			it("Comparing two numbers, this is before a describe", function(){
				assert.strictEqual(1,1,"Both are ints of the same value");
			})

			describe("this describe is after the it section", function(){
				it('Comparing an int variable to its value', function(){
					assert.strictEqual(numbah, 9, "The variable has the same value");
				});
			})
		});

		describe("Simple strick equal on booleans", function(){

			describe("This describe has a test and is before another test", function(){
				it("Comparing two booleans and their values",function(){
					assert.strictEqual(true, true, "Both the values are true");
				});
			});

			it("Coparing a boolean variable to a boolean value, this is after a describe", function(){
				assert.strictEqual(false, bool, "The two values should be equal");
			});
		});

		describe('Simple strick equal on a char and string', function(){
			describe("Padding another describe", function(){
				describe("The tests will begin shortly",function(){
					describe("Alright after this describe", function(){
						describe("Simple tests on some strings",function(){

						});
					});
				});
			});
		});

	});

});