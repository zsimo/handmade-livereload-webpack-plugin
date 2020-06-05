"use strict";

var path = require("path");
var fs = require("fs");

module.exports = function (options) {
    if (!options.hasOwnProperty("port")) {
        throw new Error("port is mandatory");
    }
    if (!options.hasOwnProperty("base_url")) {
        throw new Error("base_url is mandatory");
    }

    fs.writeFileSync(path.resolve(__dirname, "src", "config.json"), JSON.stringify(options));
    return {
        plugin: require("./src/plugin")(options),
        path_to_client: path.resolve(__dirname, "src", "client")
    };
}