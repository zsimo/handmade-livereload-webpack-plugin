"use strict";


module.exports = function (options) {

    class HandmadeLiveReload {
        constructor(){
            var server = require("http").Server();
            this.io = require("socket.io")(server);
            server.listen(options.port);
            console.log("handmade_live_reload_webpack_plugin start on " + options.port);
        }
        apply(compiler) {
            compiler.hooks.done.tap('HandmadeLiveReload', (
                stats /* stats is passed as an argument when done hook is tapped.  */
            ) => {
                this.io.emit("RELOAD");
            });
        }
    }

    return HandmadeLiveReload;
};