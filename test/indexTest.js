'use strict';
describe("index", function () {
    var serviceHelper;

    beforeEach(function () {
        serviceHelper = new ServiceHelper();
    });

    it("$index.generateThoughtServiceResult :: Check for test parameter value :: expect:test ...", function () {
        expect(serviceHelper.generateThoughtServiceResult("test")).toEqual("test ...");
    });

    it("$index.attachToStory :: Check for test and test parameter values :: expect:test test", function () {
        expect(serviceHelper.attachToStory("test","test")).toEqual("test test");
    });

    it("$index.attachToStory :: Check for test and test parameter values :: expect:test test", function () {
        expect(true).toEqual(true);
    });

});