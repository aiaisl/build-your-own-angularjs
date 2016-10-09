/// <reference path="../tsd.json" />

describe("Hello", function() {
    it("says hello", function(){
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    })
})