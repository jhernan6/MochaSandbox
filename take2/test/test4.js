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
							
							it("Comparing two lowercase strings", function(){
								assert.strictEqual("hello",'hello','The two strings should be the same');
							});

							it("Comparing two uppercase strings", function(){
								assert.strictEqual('WORLD',"WORLD", "The two strings should be the same");
							});

							describe("This describe is between the four test in this sectoin", function(){
								describe("The char test will be found inside these describes", function(){
									describe('Lets go a bit deeper', function(){
										describe("This is like describe-ception", function(){
											describe("Alright the char tests are here now", function(){

												it("Comparing two lowercase chars", function(){
													assert.strictEqual("n",'n', "The two chars should be the same");
												});

												it('Comparing two uppercase chars', function(){
													assert.strictEqual('Y',"Y",'The two chars should be the same');
												});

												it('Comparing two utf-8 chars', function(){
													assert.strictEqual("$",'$',"The two chars should be the same");
												});

												it("Comparting a variable to a char", function(){
													assert.strictEqual(oneChar,'j',"The two chars should be the same");
												});
											});
										});
									});
								});
							});

							it("Comparing two words with proper capitalization", function(){
								assert.strictEqual('Node', "Node","The two strings should be the same");
							});

							it('Comparing a variable to a string', function(){
								assert.strictEqual(oneString,"mocha","The variable and the string should be the same");
							});
						});
					});
				});
			});
		});

	});

	describe("The tests below will be using the notStrictEqual", function(){
		
		describe("Simple notStrictEqual tests on numbers", function(){
			
			it("Comparing an int/double to a string", function(){
				assert.notStrictEqual(1, "1", "They have the same value but are not the same type");
			});

			it("Comparing variable number to string", function(){
				assert.notStrictEqual(numbah, "9", "They have the same value but are not the same type");
			});
		});
	});

});