var assert = require('assert');
var Chance = require("chance");

var change = new Chance();

describe("All the tests below will be using deep asserts", function(){

	
	var brands = ["Nike", "Adidas", "Reebok", "Converse"];
	var numarray = [2, 5, 6, 12, 64];
	var human = {'fname':'Benjamin', 'lname':'Button', 'age':'24', 
					'address':'123 Main St.', 'city':'Los Angeles', 'country':"USA"};

	describe("Running deep equal tets", function(){

		
		var brandsCopy = ["Nike", "Adidas", "Reebok", "Converse"];
		var numarray2 = [2, 5, 6, 12, 64];
		var clone = {'fname':'Benjamin', 'lname':'Button', 'age':'24', 
					'address':'123 Main St.', 'city':'Los Angeles', 'country':"USA"};

		it("Using deepEqual to make sure two string arrays are the same", function(){

			assert.deepEqual(brands, brandsCopy, "The list should be the same");
		});

		it('Using deepEqual to make sure the two array of numbers are the same', function(){

			assert.deepEqual(numarray, numarray2, "The two number arrays should be the same");
		});

		it("Using deepEqual to make sure the two objects are the same", function(){
			assert.deepEqual(human, clone, "The elements in the two objects should be the same");
		});
	});

	describe("Running notDeepEqual test below inside other describes", function(){

		describe("Running notDeepEqual on a lowercase brands list", function(){

			var lowerBrands = ["nike","adidas","reebok","converse"];
			it("running test now for lowerBrands",function(){
				assert.notDeepEqual(brands, lowerBrands, "These two list are different");
			});
		});


	});
});