"use strict";

var path = require("path");
var plugin = require(path.resolve(process.cwd(), "index"));
var fs = require("fs");

// create a function into global context for Jest
global.console = {
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
}

describe("handmade-livereload-webpack-plugin", () => {

    test("missing options", () => {
        expect(function () {
            plugin();
        }).toThrowError("options is mandatory");
    });
    test("missing options.port", () => {
        expect(function () {
            plugin({});
        }).toThrowError("options.port is mandatory");
    });
    test("missing options.host", () => {
        expect(function () {
            plugin({
                port: 1234
            });
        }).toThrowError("options.host is mandatory");
    });

    test("path is a string", () => {
        var p = plugin({
            port: 1234,
            host: "localhost"
        });
        expect(typeof p.path_to_client).toBe("string");
    });


});
