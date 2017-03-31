var expect = require("chai").expect;
var request = require("request");

describe ("Color Code Converter API", function(){
	
	describe("RGB to Hex conversion", function(){

		var url =  "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

		it("return status 200", function(){

		});

		it("return the color in hex", function(){

		});
	});

	describe("Hex to RGB conversion", function(){

		var url = "http://localhost:300/hextToRgb?hex=00ff00";

		it("return status 200", function(){

		});

		it("return the color in RGB", function(){

		});
	})
});