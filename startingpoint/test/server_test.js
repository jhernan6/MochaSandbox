var expect = require("chai").expect;
var request = require("request");

describe ("Color Code Converter API", function(){
	
	describe("RGB to Hex conversion white example", function(){

		var url =  "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

		it("return status 200", function(){
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
			});
		});

		it("return the color in hex", function(){
			request(url, function(error, response, body){
				expect(body).to.equal("ffffff");
			});
		});
	});

	describe("Hex to RGB conversion green example", function(){

		var url = "http://localhost:300/hextToRgb?hex=00ff00";

		it("return status 200", function(){
			request(url, function(error, response, body){
				expect(response.statusCode).to.equal(200);
			});
		});

		it("return the color in RGB", function(){
			request(url, function(error, response, body){
				expect(body).to.equal("[0, 255, 0]");
			});
		});
	});

});