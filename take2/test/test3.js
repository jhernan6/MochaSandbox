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
	})
});