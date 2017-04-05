var assert = require('assert');
var Chance = require("chance");

var change = new Chance();

describe("All the tests below will be using deep asserts", function(){

	describe("Running deep equal tets", function(){

		var brands = ["Nike", "Adidas", "Reebok", "Converse"];
		var brandsCopy = ["Nike", "Adidas", "Reebok", "Converse"];

		var numarray = [2, 5, 6, 12, 64];
		var numarray2 = [2, 5, 6, 12, 64];

		var human = {'fname':'Benjamin', 'lname':'Button', 'age':'24', 
					'address':'123 Main St.', 'city':'Los Angeles', 'country':"USA"};
		var clone = {'fname':'Benjamin', 'lname':'Button', 'age':'24', 
					'address':'123 Main St.', 'city':'Los Angeles', 'country':"USA"};

		it("Using deepEqual to make sure two string arrays are the same", function(){

			assert.deepEqual(brands, brandsCopy, "The list should be the same");
		});

		it('Using deepEqual to make sure the two array of numbers are the same', function(){

			assert.deepEqual(numarray, numarray2, "The two number arrays should be the same");
		});

		it("Using deepEqual to make sure the two objects are the same", function(){
			assert.deepEqual(humna, clone, "The elements in the two objects should be the same");
		});
	})
});