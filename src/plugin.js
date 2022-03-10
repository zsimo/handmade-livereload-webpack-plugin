"use strict";

var {WebSocketServer} = require('ws');
var wsInstance;

module.exports = function (options) {

    class HandmadeLiveReload {
        constructor(){
            const wss = new WebSocketServer({ port: options.port });
            wss.on('connection', function connection(ws) {
                wsInstance = ws;
            });
        }
        apply(compiler) {
            compiler.hooks.done.tap('HandmadeLiveReload', (
                stats /* stats is passed as an argument when done hook is tapped.  */
            ) => {
                wsInstance.send('RELOAD');
            });
        }
    }

    return HandmadeLiveReload;
};