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
    test("missing options.base_url", () => {
        expect(function () {
            plugin({
                port: 1234
            });
        }).toThrowError("options.base_url is mandatory");
    });
    test("config file exists", () => {
        plugin({
            port: 1234,
            base_url: "localhost"
        });
        expect(fs.existsSync(path.resolve(process.cwd(), "config.json"))).toBe(true);
    });
    test("config file exists", () => {
        var p = plugin({
            port: 1234,
            base_url: "localhost"
        });
        expect(typeof p.path_to_client).toBe("string");
    });
    // test("console.log", () => {
    //     var HandmadeLiveReload = plugin({
    //         port: 1234,
    //         base_url: "http://brunelleschi"
    //     });
    //     new HandmadeLiveReload.plugin();
    //     // expect(global.console.log).toHaveBeenCalledWith(
    //     //     'handmade_live_reload_webpack_plugin start on 1234'
    //     // )
    // });

    // test("second attempt, wait for DELAY_OF_RETRY_ATTEMPTS", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 2
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    // test("third attempt, wait for DELAY_OF_RETRY_ATTEMPTS", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 3
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    // test("fourth attempt, wait for DELAY_OF_RETRY_ATTEMPTS", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 4
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    // test("fifth attempt, wait for DELAY_OF_RETRY_ATTEMPTS", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 5
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    // test("after the fifth, wait for WAIT_TIME", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 6
    //     })).toEqual(times.WAIT_TIME);
    // });
    // test("after the sixth, wait for WAIT_TIME", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 7
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    // test("after the eleventh, wait for WAIT_TIME", () => {
    //     var strategy = retryStrategy();
    //     expect(strategy({
    //         attempt: 12
    //     })).toEqual(times.WAIT_TIME);
    // });
    //
    // test("if number_of_retry_attempts is 0, end reconnecting with built in error", () => {
    //     var strategy = retryStrategy({
    //         number_of_retry_attempts: 0
    //     });
    //     expect(strategy({
    //         attempt: 12
    //     })).toEqual(undefined);
    // });
    //
    // test("change delay_of_retry_attempts", () => {
    //     var strategy = retryStrategy({
    //         delay_of_retry_attempts: 600,
    //         number_of_retry_attempts: 5
    //     });
    //     expect(strategy({
    //         attempt: 3
    //     })).toEqual(times.DELAY_OF_RETRY_ATTEMPTS);
    // });
    //
    // test("change wait_time", () => {
    //     var strategy = retryStrategy({
    //         delay_of_retry_attempts: 500,
    //         number_of_retry_attempts: 5,
    //         wait_time: 1000
    //     });
    //     expect(strategy({
    //         attempt: 12
    //     })).toEqual(times.WAIT_TIME);
    // });

});
