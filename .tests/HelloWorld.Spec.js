 var sinon =  require("sinon");
 var assert = require("assert");
 var _ = require("underscore.string");
 var HW = require("../src/HelloWorld.Module");

describe("Hello World", function(){
	var sandbox;
	
	beforeEach(function () {
    	sandbox = sinon.sandbox.create();
	});

	afterEach(function () {
		sandbox.restore();
	});
	
	it("first test...",function(){
		expect(true).toBe(true);
	});
	
	it("use anonymous spy", function(){
		var spy  = sinon.spy();
		spy();
		assert(spy.calledOnce);
	});
	
	it("say hello message to Luke Skywalker", function(){
		var hw = new HW();
		var spy = sandbox
					.spy(_,"sprintf")
					.withArgs("Hello, %s","Luke");
						
		expect(hw.SayHello("Luke")).toBe("Hello, Luke");
		assert(spy.calledOnce);
	});
	
	it("say Bye message to Luke Skywalker", function(){
		var hw = new HW();
		sinon.restore();
		var spy = sandbox
					.spy(_, "sprintf")
					.withArgs("Bye, %s","Luke");	
		expect(hw.SayGoodBye("Luke")).toBe("Bye, Luke");
		assert(spy.calledOnce);
		
	});
});
